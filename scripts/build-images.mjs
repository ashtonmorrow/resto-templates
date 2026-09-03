import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = path.resolve('public/images');
const outputDirectory = path.join(sourceDirectory, 'optimized');
const manifestFile = path.join(outputDirectory, 'manifest.json');
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png']);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (file.startsWith(outputDirectory)) return [];
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function hash(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
  } catch {
    return {};
  }
}

if (!fs.existsSync(sourceDirectory)) {
  console.error(`No existe el directorio de imágenes: ${sourceDirectory}`);
  process.exit(1);
}

const previousManifest = readManifest();
const nextManifest = {};
const sourceFiles = walk(sourceDirectory).filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()));
let generated = 0;

for (const sourceFile of sourceFiles) {
  const relative = path.relative(sourceDirectory, sourceFile).split(path.sep).join('/');
  const key = relative.replace(/\.[^.]+$/, '');
  const digest = hash(sourceFile);
  const mobileFile = path.join(outputDirectory, `${key}-640.webp`);
  const fullFile = path.join(outputDirectory, `${key}-full.webp`);
  nextManifest[relative] = digest;

  if (previousManifest[relative] === digest && fs.existsSync(mobileFile) && fs.existsSync(fullFile)) continue;

  fs.mkdirSync(path.dirname(mobileFile), { recursive: true });
  await sharp(sourceFile).rotate().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 82, effort: 4 }).toFile(mobileFile);
  await sharp(sourceFile).rotate().webp({ quality: 84, effort: 4 }).toFile(fullFile);
  generated += 2;
}

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(manifestFile, `${JSON.stringify(nextManifest, null, 2)}\n`);
console.log(generated ? `Imágenes optimizadas: ${generated} archivos generados.` : 'Imágenes optimizadas: no había cambios.');
