function clean(value) {
  return String(value ?? '').trim();
}

export function buildReservationMessage(values, restaurantName) {
  return [
    `Hola! Quiero solicitar una reserva en ${clean(restaurantName)}.`,
    `Nombre: ${clean(values.nombre)}`,
    `Personas: ${clean(values.personas)}`,
    `Día: ${clean(values.dia)}`,
    `Horario: ${clean(values.hora)}`,
  ].join('\n');
}

export function buildWhatsappUrl(phone, message) {
  const digits = clean(phone).replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
