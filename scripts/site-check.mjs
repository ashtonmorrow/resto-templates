import fs from 'node:fs';
import path from 'node:path';

const outputDirectory = path.resolve(process.argv[2] ?? 'dist');
let siteOrigin = 'https://folio.unwoke.ninja';
const failures = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function routeFor(file) {
  const relative = path.relative(outputDirectory, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

function targetFor(pathname) {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, '');
  const direct = path.join(outputDirectory, relative);
  return path.extname(direct) ? direct : path.join(direct, 'index.html');
}

function fail(file, message) {
  failures.push(`${path.relative(outputDirectory, file)}: ${message}`);
}

if (!fs.existsSync(outputDirectory)) {
  console.error(`No existe el directorio compilado: ${outputDirectory}`);
  process.exit(1);
}

const files = walk(outputDirectory);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const routes = new Set(htmlFiles.map(routeFor));
const titles = new Map();
const rootHtml = path.join(outputDirectory, 'index.html');
const rootCanonical = fs.existsSync(rootHtml)
  ? fs.readFileSync(rootHtml, 'utf8').match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  : null;
if (rootCanonical) siteOrigin = new URL(rootCanonical).origin;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeFor(file);
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) fail(file, `ids repetidos: ${duplicateIds.join(', ')}`);

  const h1Count = (html.match(/<h1\b/g) ?? []).length;
  if (h1Count !== 1) fail(file, `se esperaba un h1 y hay ${h1Count}`);

  const mainCount = (html.match(/<main\b/g) ?? []).length;
  if (mainCount !== 1) fail(file, `se esperaba un main y hay ${mainCount}`);
  if (!ids.includes('main-content')) fail(file, 'falta id="main-content" para el enlace de salto');
  const mainHtml = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '';
  if (!/<h1\b/.test(mainHtml)) fail(file, 'el h1 principal quedó fuera de main');

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  if (!title) fail(file, 'falta title');
  else if (titles.has(title)) fail(file, `title repetido con ${titles.get(title)}`);
  else titles.set(title, route);

  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(file, 'falta meta description');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) fail(file, 'falta canonical');
  else if (new URL(canonical).pathname !== route) fail(file, `canonical apunta a ${canonical}`);

  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\balt="[^"]*"/.test(match[1])) fail(file, 'hay una imagen sin atributo alt');
  }

  for (const match of html.matchAll(/<a\b([^>]*)>/g)) {
    const attributes = match[1];
    if (/\btarget="_blank"/.test(attributes) && !/\brel="[^"]*(?:noopener|noreferrer)[^"]*"/.test(attributes)) {
      fail(file, 'un enlace target="_blank" no tiene rel seguro');
    }
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (value === '#') {
      fail(file, 'hay un enlace de marcador href="#"');
      continue;
    }

    let url;
    try {
      url = new URL(value, `${siteOrigin}${route}`);
    } catch {
      fail(file, `URL inválida: ${value}`);
      continue;
    }
    if (url.origin !== siteOrigin) continue;

    const target = targetFor(url.pathname);
    if (!fs.existsSync(target)) {
      fail(file, `no existe el destino ${url.pathname}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1));
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`\\sid=["']${escaped}["']`).test(targetHtml)) fail(file, `no existe el ancla ${url.pathname}${url.hash}`);
    }
  }

  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    const candidates = match[1].split(',').map((candidate) => candidate.trim().split(/\s+/)[0]);
    for (const value of candidates) {
      const url = new URL(value, `${siteOrigin}${route}`);
      if (url.origin !== siteOrigin) continue;
      const target = targetFor(url.pathname);
      if (!fs.existsSync(target)) fail(file, `no existe la imagen adaptable ${url.pathname}`);
    }
  }
}

const sitemapFile = path.join(outputDirectory, 'sitemap.xml');
if (!fs.existsSync(sitemapFile)) {
  failures.push('sitemap.xml: falta el sitemap');
} else {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const sitemapRoutes = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname));
  for (const route of routes) if (!sitemapRoutes.has(route)) failures.push(`sitemap.xml: falta ${route}`);
  for (const route of sitemapRoutes) if (!routes.has(route)) failures.push(`sitemap.xml: ${route} no tiene página compilada`);
}

for (const file of files.filter((item) => /\.(?:png|jpe?g|webp)$/i.test(item))) {
  const bytes = fs.readFileSync(file).subarray(0, 12);
  const extension = path.extname(file).toLowerCase();
  const isPng = bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const isWebp = bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP';
  const matches = (extension === '.png' && isPng) || (/^\.jpe?g$/.test(extension) && isJpeg) || (extension === '.webp' && isWebp);
  if (!matches) fail(file, `la extensión ${extension} no coincide con el contenido de la imagen`);
}

if (failures.length) {
  console.error(`La revisión del sitio encontró ${failures.length} problema(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Sitio revisado: ${htmlFiles.length} páginas, enlaces internos, anclas, metadatos, sitemap e imágenes.`);
