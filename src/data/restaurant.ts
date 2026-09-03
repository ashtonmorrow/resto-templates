// Canonical restaurant record. This is both the demo content and the client
// intake contract: onboarding a real client means swapping this object.

export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tags?: string[];
}
export interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}
export interface HoursRow {
  days: string;
  time: string;
}
export interface Media {
  src: string;
  alt: string;
}
export interface RestaurantEvent {
  day: string;
  title: string;
  detail: string;
}
export interface Restaurant {
  name: string;
  shortName: string;
  tagline: string;
  kicker: string;
  cuisine: string[];
  priceRange: string;
  about: string;
  story: string;
  since: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  whatsapp: string; // digits only, for wa.me
  whatsappMsg: string;
  instagram: string;
  instagramUrl: string;
  hours: HoursRow[];
  geo: { lat: number; lng: number };
  reservationPartySizes: number[];
  reservationTimes: string[];
  events: RestaurantEvent[];
  menu: MenuCategory[];
  hero: Media[];
  gallery: Media[];
}

export const restaurant: Restaurant = {
  name: 'Casa Rufina',
  shortName: 'Rufina',
  tagline: 'Parrilla, pastas y vinos en el corazón de Palermo.',
  kicker: 'Parrilla · Cocina argentina',
  cuisine: ['Parrilla', 'Argentina', 'Pastas'],
  priceRange: '$$',
  about:
    'En el corazón de Palermo, Casa Rufina reúne lo mejor de la cocina argentina: la parrilla a las brasas, las pastas caseras de la abuela y una carta de vinos que celebra a Mendoza y Salta. Un lugar de barrio para juntarse, comer rico y quedarse hasta tarde.',
  story: 'Desde 2012 cocinamos como en casa: fuego lento, ingredientes de estación y la mesa siempre puesta.',
  since: '2012',
  address: 'Gurruchaga 1847',
  neighborhood: 'Palermo',
  city: 'Buenos Aires',
  phone: '+54 11 4832-5566',
  whatsapp: '5491148325566',
  whatsappMsg: 'Hola! Quiero reservar una mesa en Casa Rufina.',
  instagram: '@casarufina',
  instagramUrl: 'https://instagram.com/casarufina',
  hours: [
    { days: 'Lunes a Jueves', time: '12:00 – 15:30 · 20:00 – 00:00' },
    { days: 'Viernes y Sábado', time: '12:00 – 16:00 · 20:00 – 01:00' },
    { days: 'Domingo', time: '12:00 – 16:00' },
  ],
  geo: { lat: -34.5889, lng: -58.4306 },
  reservationPartySizes: [2, 3, 4, 5, 6, 8, 10],
  reservationTimes: ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30'],
  events: [
    { day: 'Jue', title: 'Cata de Malbec', detail: 'Valle de Uco · 20:30' },
    { day: 'Vie', title: 'Vinos naturales', detail: 'Copas desde $4.500 · 21:00' },
    { day: 'Sáb', title: 'Música en vivo', detail: 'Jazz + tabla · 22:00' },
  ],
  menu: [
    {
      name: 'Entradas',
      items: [
        { name: 'Empanadas de carne (2u)', price: '$6.800', desc: 'Cortadas a cuchillo, masa criolla.' },
        { name: 'Provoleta a la parrilla', price: '$9.500', desc: 'Con orégano y ají molido.' },
        { name: 'Tabla de fiambres', price: '$18.900', desc: 'Jamón crudo, salame, quesos y aceitunas.' },
        { name: 'Chorizo y morcilla', price: '$7.900', desc: 'De la parrilla, con pan casero.' },
      ],
    },
    {
      name: 'De la parrilla',
      note: 'Todo a las brasas de quebracho.',
      items: [
        { name: 'Bife de chorizo', price: '$16.900', desc: '400g, con chimichurri de la casa.' },
        { name: 'Asado de tira', price: '$15.500', desc: 'Tira ancha, cocción lenta.' },
        { name: 'Vacío', price: '$15.900', desc: 'Jugoso, sellado a las brasas.' },
        { name: 'Pollo a la parrilla', price: '$12.900', desc: 'Marinado en hierbas.' },
      ],
    },
    {
      name: 'Pastas caseras',
      items: [
        { name: 'Sorrentinos de jamón y queso', price: '$13.900', desc: 'Salsa a elección: fileto, crema o mixta.' },
        { name: 'Ravioles de verdura', price: '$12.500', desc: 'Ricota y espinaca.' },
        { name: 'Ñoquis del 29', price: '$11.900', desc: 'Con salsa bolognesa.' },
      ],
    },
    {
      name: 'Postres',
      items: [
        { name: 'Flan mixto', price: '$6.500', desc: 'Con dulce de leche y crema.' },
        { name: 'Panqueque de dulce de leche', price: '$6.900', desc: 'Flambeado en la mesa.' },
        { name: 'Helado artesanal (2 bochas)', price: '$5.900', desc: 'Dulce de leche, sambayón o limón.' },
      ],
    },
    {
      name: 'Vinos',
      note: 'Carta completa en el salón.',
      items: [
        { name: 'Malbec, copa o botella', price: '$4.500 / $22.000', desc: 'Valle de Uco, Mendoza.' },
        { name: 'Cabernet Sauvignon, botella', price: '$24.000', desc: 'Mendoza.' },
        { name: 'Torrontés, botella', price: '$20.000', desc: 'Cafayate, Salta.' },
      ],
    },
  ],
  hero: [
    { src: '/images/ambiance/parrilla-grill.jpg', alt: 'Cortes de carne y chorizo a las brasas en la parrilla de Casa Rufina' },
    { src: '/images/ambiance/modern-bright.jpg', alt: 'Salón luminoso de Casa Rufina, parrilla en Palermo, Buenos Aires' },
    { src: '/images/ambiance/dining-moody.jpg', alt: 'Salón a la luz de las velas para cenar en Casa Rufina' },
    { src: '/images/ambiance/facade-dusk.jpg', alt: 'Fachada de Casa Rufina al atardecer en Palermo' },
  ],
  gallery: [
    { src: '/images/food/asado-platter.jpg', alt: 'Tabla de asado a la parrilla con chorizo, morcilla y chimichurri' },
    { src: '/images/food/empanadas.jpg', alt: 'Empanadas de carne caseras cortadas a cuchillo' },
    { src: '/images/food/pasta.jpg', alt: 'Sorrentinos caseros con salsa de tomate y albahaca' },
    { src: '/images/food/provoleta.jpg', alt: 'Provoleta a la parrilla con orégano en cazuela de hierro' },
    { src: '/images/food/flan.jpg', alt: 'Flan mixto con dulce de leche y crema' },
    { src: '/images/food/malbec.jpg', alt: 'Copa de Malbec argentino en Casa Rufina' },
    { src: '/images/detail/table-flatlay.jpg', alt: 'Mesa servida con pan, chimichurri y copas de Malbec' },
    { src: '/images/ambiance/bodegon-warm.jpg', alt: 'Salón de bodegón tradicional de Casa Rufina' },
  ],
};
