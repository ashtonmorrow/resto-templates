import fs from 'node:fs';
import path from 'node:path';

const outputDirectory = path.resolve(process.argv[2] ?? 'dist');

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

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

if (!fs.existsSync(outputDirectory)) {
  console.error(`No existe el directorio compilado: ${outputDirectory}`);
  process.exit(1);
}

const routes = walk(outputDirectory)
  .filter((file) => file.endsWith('.html'))
  .map(routeFor)
  .sort((left, right) => left.localeCompare(right, 'es'));
const rootHtml = fs.readFileSync(path.join(outputDirectory, 'index.html'), 'utf8');
const canonical = rootHtml.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
if (!canonical) {
  console.error('No se pudo obtener el dominio desde el canonical de index.html.');
  process.exit(1);
}
const siteOrigin = new URL(canonical).origin;

const urls = routes.map((route) => `  <url><loc>${escapeXml(`${siteOrigin}${route}`)}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(outputDirectory, 'sitemap.xml'), sitemap);
console.log(`Sitemap generado: ${routes.length} rutas.`);
