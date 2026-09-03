import assert from 'node:assert/strict';
import test from 'node:test';
import { buildDesignBrief } from '../src/lib/design-brief.mjs';

test('keeps the supplied design decisions in the generated brief', () => {
  const brief = buildDesignBrief({
    source: 'Figma',
    goal: 'Presentar un estudio y recibir consultas',
    action: 'Enviar una consulta',
    sections: 'Portada\nServicios\nContacto',
    mobile: 'Una columna con el botón antes de la galería',
  });

  assert.match(brief, /referencia de Figma/);
  assert.match(brief, /Presentar un estudio y recibir consultas/);
  assert.match(brief, /- Portada\n- Servicios\n- Contacto/);
  assert.match(brief, /Una columna con el botón antes de la galería/);
});

test('marks missing decisions instead of inventing answers', () => {
  const brief = buildDesignBrief({ source: '', goal: '', sections: '' });

  assert.match(brief, /referencia de PENDIENTE/);
  assert.match(brief, /Bloques que tiene que incluir:\n- PENDIENTE/);
  assert.doesNotMatch(brief, /undefined|null/);
});

test('normalizes pasted list markers', () => {
  const brief = buildDesignBrief({ sections: '1. Portada\n- Galería\n• Contacto' });

  assert.match(brief, /- Portada\n- Galería\n- Contacto/);
});

test('keeps numbers that are part of a section name', () => {
  const brief = buildDesignBrief({ sections: '404\n3D\n2 personas' });

  assert.match(brief, /- 404\n- 3D\n- 2 personas/);
});
