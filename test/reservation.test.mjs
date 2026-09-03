import assert from 'node:assert/strict';
import test from 'node:test';
import { buildReservationMessage, buildWhatsappUrl } from '../src/lib/reservation.mjs';

test('builds a reservation request from the submitted fields', () => {
  const message = buildReservationMessage(
    { nombre: 'Ana', personas: '4', dia: '2026-09-05', hora: '21:00' },
    'Casa Rufina',
  );

  assert.equal(
    message,
    'Hola! Quiero solicitar una reserva en Casa Rufina.\nNombre: Ana\nPersonas: 4\nDía: 2026-09-05\nHorario: 21:00',
  );
});

test('creates a WhatsApp URL with a normalized phone number', () => {
  const url = buildWhatsappUrl('+54 9 11 4832-5566', 'Mesa para 4');

  assert.equal(url, 'https://wa.me/5491148325566?text=Mesa%20para%204');
});
