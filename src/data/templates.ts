// The 15 layout systems. Same restaurant data, different information
// architecture + theme. `preview` colors drive the portfolio thumbnails.

export interface TemplateMeta {
  id: string;
  codename: string;
  fits: string;       // restaurant archetype it suits
  menuPos: string;    // where the menu lives (the IA gimmick)
  theme: string;      // data-theme key -> tokens.css
  blurb: string;      // one line for the portfolio card
  preview: { bg: string; ink: string; accent: string; band: string };
}

export const templates: TemplateMeta[] = [
  {
    id: '01',
    codename: 'La Brasa',
    fits: 'Parrilla',
    menuPos: 'Menú a mitad de scroll',
    theme: 'ember',
    blurb: 'Hero a pantalla completa, scroll único, brasas y humo.',
    preview: { bg: '#171009', ink: '#f4ece5', accent: '#e2591f', band: '#2a1b12' },
  },
  {
    id: '02',
    codename: 'El Bodegón',
    fits: 'Bodegón clásico',
    menuPos: 'Menú en página propia',
    theme: 'heritage',
    blurb: 'Multipágina, tipografía de época, calidez de barrio.',
    preview: { bg: '#f7f1e6', ink: '#2a211b', accent: '#9c2b2b', band: '#e0d4bf' },
  },
  {
    id: '03',
    codename: 'Palermo Soho',
    fits: 'Bistró moderno',
    menuPos: 'Extracto + enlace',
    theme: 'minimal',
    blurb: 'Editorial, asimétrico, mucho aire en blanco.',
    preview: { bg: '#ffffff', ink: '#14140f', accent: '#3f6f52', band: '#eceae4' },
  },
  {
    id: '04',
    codename: 'La Carta',
    fits: 'Café / brunch',
    menuPos: 'Menú en barra lateral',
    theme: 'airy',
    blurb: 'Sidebar fija a la izquierda, contenido a la derecha.',
    preview: { bg: '#fbf7f4', ink: '#2c2622', accent: '#d98b6a', band: '#f2ece9' },
  },
  {
    id: '05',
    codename: 'Puerto Madero',
    fits: 'Alta cocina',
    menuPos: 'Menú en columnas',
    theme: 'luxe',
    blurb: 'Split-screen: imagen fija y contenido que scrollea.',
    preview: { bg: '#0f1114', ink: '#eef0f2', accent: '#c9a24b', band: '#1f232a' },
  },
  {
    id: '06',
    codename: 'La Pizzería',
    fits: 'Pizzería',
    menuPos: 'Menú arriba (protagonista)',
    theme: 'bold',
    blurb: 'La carta es el hero, precios al frente, delivery visible.',
    preview: { bg: '#fffdf7', ink: '#1c1a17', accent: '#d1341f', band: '#fff2ec' },
  },
  {
    id: '07',
    codename: 'Bento',
    fits: 'Multi-concepto',
    menuPos: 'Menú en un tile',
    theme: 'playful',
    blurb: 'Home tipo grilla bento: cada bloque un mosaico.',
    preview: { bg: '#f6f4ff', ink: '#201d33', accent: '#6c5ce7', band: '#efeaff' },
  },
  {
    id: '08',
    codename: 'El Relato',
    fits: 'Lugar con historia',
    menuPos: 'Menú como sección-pantalla',
    theme: 'cinematic',
    blurb: 'Scroll con snap, secciones a pantalla, cine.',
    preview: { bg: '#0a0a0b', ink: '#f2f0ee', accent: '#d8b06a', band: '#17171a' },
  },
  {
    id: '09',
    codename: 'La Cava',
    fits: 'Bar de vinos',
    menuPos: 'Menú por categorías',
    theme: 'wine',
    blurb: 'Oscuro y de noche, agenda de eventos arriba.',
    preview: { bg: '#1a0f14', ink: '#f2e7ea', accent: '#c06b7e', band: '#301a22' },
  },
  {
    id: '10',
    codename: 'Heladería',
    fits: 'Postres / dulces',
    menuPos: 'Menú tipo productos',
    theme: 'sweet',
    blurb: 'Grilla de productos, tarjetas, colorido y amable.',
    preview: { bg: '#fff6fb', ink: '#35202c', accent: '#ff5fa2', band: '#ffeaf4' },
  },
  {
    id: '11',
    codename: 'Mínimo',
    fits: 'Take away / café chico',
    menuPos: 'Sin menú (horarios + mapa)',
    theme: 'mono',
    blurb: 'Una sola pantalla: nombre, horario, WhatsApp.',
    preview: { bg: '#f4f4f4', ink: '#111111', accent: '#111111', band: '#e2e2e2' },
  },
  {
    id: '12',
    codename: 'Clásico',
    fits: 'Restaurante grande',
    menuPos: 'Menú en sección con anclas',
    theme: 'clean',
    blurb: 'Nav fija con saltos de ancla, prolijo y profesional.',
    preview: { bg: '#f7f9fb', ink: '#17202a', accent: '#2f6f9f', band: '#eef2f6' },
  },
  {
    id: '13',
    codename: 'Instagrameable',
    fits: 'Lugar muy visual',
    menuPos: 'Menú secundario',
    theme: 'gallery',
    blurb: 'Galería masonry como hero, la foto manda.',
    preview: { bg: '#faf9f7', ink: '#1e1b18', accent: '#b06a3c', band: '#f0ede9' },
  },
  {
    id: '14',
    codename: 'Reserva-First',
    fits: 'Muy demandado',
    menuPos: 'Menú debajo de la reserva',
    theme: 'convert',
    blurb: 'Reserva arriba de todo, conversión primero.',
    preview: { bg: '#ffffff', ink: '#16201b', accent: '#1f9d68', band: '#f2f7f4' },
  },
  {
    id: '15',
    codename: 'La Rotisería',
    fits: 'Rotisería / deli',
    menuPos: 'Menú en panel a la derecha',
    theme: 'warm',
    blurb: 'Contenido a la izquierda, carta fija a la derecha.',
    preview: { bg: '#fbf5ee', ink: '#2a201a', accent: '#c1622a', band: '#f2e7d8' },
  },
];
