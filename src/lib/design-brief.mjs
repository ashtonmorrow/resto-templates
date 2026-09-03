const pending = 'PENDIENTE';

function clean(value) {
  return String(value ?? '').trim();
}

function answer(value) {
  return clean(value) || pending;
}

function lines(value) {
  const items = clean(value)
    .split('\n')
    .map((item) => item.replace(/^\s*(?:[-*•]\s+|\d+[.)]\s+)/u, '').trim())
    .filter(Boolean);
  return items.length ? items.map((item) => `- ${item}`).join('\n') : `- ${pending}`;
}

export function buildDesignBrief(values = {}) {
  const source = answer(values.source);
  return [
    `Quiero adaptar una referencia de ${source} dentro de este proyecto.`,
    '',
    'Objetivo de la página:',
    answer(values.goal),
    '',
    'Acción principal:',
    answer(values.action),
    '',
    'Bloques que tiene que incluir:',
    lines(values.sections),
    '',
    'Comportamiento en teléfono:',
    answer(values.mobile),
    '',
    'Contenido y decisiones que se deben conservar:',
    answer(values.preserve),
    '',
    'Datos o decisiones que todavía faltan:',
    answer(values.unknowns),
    '',
    'Antes de editar:',
    '1. Leé README.md y el archivo de instrucciones del repositorio.',
    '2. Ubicá los datos, componentes y tokens que ya existen.',
    '3. Explicame qué archivos usarías y qué decisión todavía falta.',
    '4. No inventes texto, datos, enlaces ni comportamientos marcados como PENDIENTE.',
    '',
    'Para la primera iteración:',
    '1. Modificá una sola sección completa.',
    '2. Reutilizá componentes y tokens antes de crear alternativas.',
    '3. Conservá todo lo que queda fuera de este pedido.',
    '4. Mostrame la vista previa y el diff.',
    '5. Ejecutá npm run verify y avisame si aparece un error.',
  ].join('\n');
}
