#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const HARD_RULES = [
  ['hype: increíble', /\bincreíble(?:s)?\b/giu],
  ['hype: impresionante', /\bimpresionante(?:s)?\b/giu],
  ['hype: revolucionario', /\brevolucionari[oa]s?\b/giu],
  ['hype: mágico', /\bmágic[oa]s?\b/giu],
  ['hype: perfecto', /\bperfect[oa]s?\b/giu],
  ['promesa: sin esfuerzo', /\bsin esfuerzo\b/giu],
  ['promesa: en segundos', /\ben (?:unos )?segundos\b/giu],
  ['promesa: sin saber nada', /\bsin (?:tener que )?saber nada\b/giu],
  ['promesa: la IA hace todo', /\bla IA (?:hace|hará|se encarga de) todo\b/giu],
  ['atajo: sólo pegá', /\bs[oó]lo peg[áa]\b/giu],
  ['atajo: simplemente pedile', /\bsimplemente pedile\b/giu],
];

const SOFT_RULES = [
  ['revisar: facilidad no demostrada', /\b(?:fácil|fáciles|sencillo|sencilla|simplemente)\b/giu],
  ['revisar: antropomorfismo', /\bla IA (?:sabe|entiende|recuerda|decide)\b/giu],
  ['revisar: alcance total', /\b(?:todo lo que necesitás|de principio a fin)\b/giu],
  ['revisar: contraste prefabricado', /\bno (?:es|significa|empieza|se trata de)\b[^.!?]{0,100}[.!?]\s*(?:es|significa|empieza|se trata de)\b/giu],
  ['revisar: frase de campaña', /\b(?:aprendé haciendo|hacelo realidad|proyectos? que funcionan?)\b/giu],
  ['revisar: verbo promocional', /\b(?:potenciá|transformá|revolucioná|te acompaña|te acompañamos)\b/giu],
  ['revisar: siguiente nivel', /\bllevá\b[^.!?]{0,40}\bal siguiente nivel\b/giu],
  ['revisar: énfasis abstracto', /\blo que importa es\b/giu],
];

const MAX_SENTENCE_WORDS = 48;
const OPENING_PUNCTUATION_RULE = 'puntuación: signo de apertura';
const LINTABLE_EXTENSIONS = new Set(['.astro', '.js', '.mjs', '.ts']);

function positionAt(source, index) {
  const before = source.slice(0, index);
  const lines = before.split('\n');
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

function decodeEscape(source, index) {
  const value = source[index];
  const simple = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', '0': '\0' };
  if (value in simple) return { value: simple[value], next: index + 1 };
  if (value === 'u') {
    const hex = source.slice(index + 1, index + 5);
    if (/^[0-9a-f]{4}$/i.test(hex)) return { value: String.fromCodePoint(Number.parseInt(hex, 16)), next: index + 5 };
  }
  return { value, next: index + 1 };
}

function extractStrings(source) {
  const strings = [];
  let index = 0;
  while (index < source.length) {
    if (source[index] === '/' && source[index + 1] === '/') {
      index = source.indexOf('\n', index + 2);
      if (index === -1) break;
      continue;
    }
    if (source[index] === '/' && source[index + 1] === '*') {
      const end = source.indexOf('*/', index + 2);
      index = end === -1 ? source.length : end + 2;
      continue;
    }
    const quote = source[index];
    if (!['\'', '"', '`'].includes(quote)) {
      index += 1;
      continue;
    }

    const start = index;
    let value = '';
    let interpolation = false;
    index += 1;
    while (index < source.length) {
      if (source[index] === '\\') {
        const decoded = decodeEscape(source, index + 1);
        value += decoded.value;
        index = decoded.next;
        continue;
      }
      if (quote === '`' && source[index] === '$' && source[index + 1] === '{') interpolation = true;
      if (source[index] === quote) {
        index += 1;
        break;
      }
      value += source[index];
      index += 1;
    }
    if (!interpolation) strings.push({ value, start });
  }
  return strings;
}

function looksLikeProse(value) {
  const text = value.trim();
  if (!text || /^https?:\/\//i.test(text) || /^[/#]/.test(text)) return false;
  if (/^[\w./@:-]+$/.test(text)) return false;
  return (text.match(/[\p{L}ÁÉÍÓÚÜÑáéíóúüñ]+/gu) ?? []).length >= 3;
}

export function lintText(text) {
  const findings = [];
  const push = (index, severity, rule, match) => findings.push({ index, severity, rule, match });

  for (const match of text.matchAll(/[—–]/gu)) {
    if (match[0] === '—') push(match.index, 'HARD', 'puntuación: raya larga', match[0]);
    else {
      const before = text[match.index - 1] ?? ' ';
      const after = text[match.index + 1] ?? ' ';
      if (/\s/u.test(before) || /\s/u.test(after)) push(match.index, 'HARD', 'puntuación: raya espaciada', match[0]);
    }
  }
  for (const match of text.matchAll(/[¿¡]/gu)) {
    push(match.index, 'HARD', OPENING_PUNCTUATION_RULE, match[0]);
  }
  for (const [rule, regex] of HARD_RULES) {
    for (const match of text.matchAll(regex)) push(match.index, 'HARD', rule, match[0]);
  }
  for (const [rule, regex] of SOFT_RULES) {
    for (const match of text.matchAll(regex)) push(match.index, 'soft', rule, match[0]);
  }

  let sentenceOffset = 0;
  for (const sentence of text.split(/(?<=[.!?])\s+/u)) {
    const words = sentence.trim().split(/\s+/u).filter(Boolean).length;
    if (words > MAX_SENTENCE_WORDS) push(sentenceOffset, 'soft', 'revisar: oración larga', `${words} palabras`);
    sentenceOffset += sentence.length + 1;
  }

  return findings.sort((a, b) => a.index - b.index);
}

function lintSource(file) {
  const source = fs.readFileSync(file, 'utf8');
  let hard = 0;
  let total = 0;

  for (const match of source.matchAll(/[¿¡]/gu)) {
    const position = positionAt(source, match.index);
    console.log(`${file}:${position.line}:${position.column}  [HARD]  ${OPENING_PUNCTUATION_RULE}  "${match[0]}"`);
    total += 1;
    hard += 1;
  }

  for (const item of extractStrings(source)) {
    if (!looksLikeProse(item.value)) continue;
    for (const finding of lintText(item.value)) {
      if (finding.rule === OPENING_PUNCTUATION_RULE) continue;
      const position = positionAt(source, item.start + 1 + finding.index);
      console.log(`${file}:${position.line}:${position.column}  [${finding.severity}]  ${finding.rule}  "${finding.match}"`);
      total += 1;
      if (finding.severity === 'HARD') hard += 1;
    }
  }
  return { hard, total };
}

function collectFiles(entries) {
  const files = [];
  for (const entry of entries) {
    if (!fs.existsSync(entry)) {
      console.error(`No existe ${entry}`);
      return null;
    }
    const stat = fs.statSync(entry);
    if (stat.isDirectory()) {
      const children = fs.readdirSync(entry).map((name) => path.join(entry, name));
      const nested = collectFiles(children);
      if (!nested) return null;
      files.push(...nested);
    } else if (LINTABLE_EXTENSIONS.has(path.extname(entry))) {
      files.push(entry);
    }
  }
  return files.sort();
}

function selftest() {
  const cases = [
    ['clean', 'Un componente es una pieza reutilizable con una función clara.', []],
    ['hype', 'La IA produce un resultado increíble.', ['hype: increíble']],
    ['false promise', 'La IA hace todo sin esfuerzo.', ['promesa: la IA hace todo', 'promesa: sin esfuerzo']],
    ['dash', 'Diseñá primero — publicá después.', ['puntuación: raya larga']],
    ['punctuation', '¿Querés seguir? ¡Dale!', [OPENING_PUNCTUATION_RULE, OPENING_PUNCTUATION_RULE]],
    ['soft', 'Simplemente abrí el archivo y revisá el resultado.', ['revisar: facilidad no demostrada']],
    ['contrast', 'No es un prompt. Es una forma de trabajar.', ['revisar: contraste prefabricado']],
    ['campaign', 'Aprendé haciendo sobre proyectos que funcionan.', ['revisar: frase de campaña', 'revisar: frase de campaña']],
  ];
  let failures = 0;
  for (const [name, text, expected] of cases) {
    const actual = lintText(text).map((finding) => finding.rule);
    if (expected.length !== actual.length || expected.some((rule) => !actual.includes(rule))) {
      console.error(`${name}: esperaba ${JSON.stringify(expected)}, recibió ${JSON.stringify(actual)}`);
      failures += 1;
    }
  }
  if (!failures) console.log('voice-lint selftest: ok');
  return failures ? 1 : 0;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--selftest')) return selftest();
  if (args[0] === '--text') {
    const findings = lintText(args.slice(1).join(' '));
    for (const finding of findings) console.log(`[${finding.severity}] ${finding.rule} "${finding.match}"`);
    return findings.some((finding) => finding.severity === 'HARD') ? 1 : 0;
  }
  const files = collectFiles(args.length ? args : ['src']);
  if (!files) return 2;
  let hard = 0;
  let total = 0;
  for (const file of files) {
    const result = lintSource(file);
    hard += result.hard;
    total += result.total;
  }
  if (!total) console.log('Sin hallazgos mecánicos. Falta la lectura humana de voice/VOICE.md.');
  else if (!hard) console.log(`${total} aviso(s) para revisar. Sin fallas mecánicas.`);
  return hard ? 1 : 0;
}

process.exit(main());
