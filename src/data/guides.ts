export interface GuideSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  readTime: string;
  takeaway: string;
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: 'como-crear-la-web-de-tu-restaurante',
    kicker: 'Guía base',
    title: 'Cómo crear la página web de tu restaurante',
    description: 'Qué necesitás, qué podés evitar y cómo salir online sin entregarle tu negocio a una plataforma.',
    readTime: '7 min',
    takeaway: 'Una web gastronómica útil no necesita ser compleja. Tiene que contestar rápido qué ofrecés, dónde estás, cuándo abrís y cómo reservar o pedir.',
    sections: [
      { title: 'Primero: definí qué trabajo tiene que hacer', paragraphs: ['La web no es un folleto decorativo. Para un restaurante chico suele tener cuatro trabajos: mostrar la carta, explicar el lugar, responder dudas prácticas y convertir visitas en reservas o pedidos.'], bullets: ['Carta legible desde el celular', 'Horarios y ubicación actualizados', 'Un botón claro para reservar', 'Un camino corto para pedir por WhatsApp'] },
      { title: 'Dominio, contenido y publicación', paragraphs: ['Comprá el dominio a nombre del negocio. Guardá las fotos y la carta en formatos que puedas reutilizar. Publicá el sitio en una cuenta que controles. Esas tres decisiones evitan que una agencia o plataforma se convierta en la dueña práctica de tu presencia digital.'], bullets: ['Dominio registrado por vos', 'Acceso a la cuenta de publicación', 'Copia descargable del sitio', 'Contraseñas en un gestor seguro'] },
      { title: 'Elegí una base, no una hoja en blanco', paragraphs: ['Una plantilla específica para gastronomía ya resuelve jerarquía, carta, ubicación, fotografías y botones de conversión. Elegí por la forma en que vende tu negocio: una parrilla necesita atmósfera; una pizzería necesita precios y pedidos; un bar concurrido necesita reservas.'], bullets: ['Cambiá marca, colores y tipografía', 'Reemplazá el contenido de demostración', 'Probá todo desde un teléfono', 'Publicá y mejorá después'] },
      { title: 'Lo que puede esperar', paragraphs: ['No hace falta arrancar con cuentas de usuario, una aplicación propia, un sistema de puntos o un panel complicado. Primero resolvé descubrimiento y contacto directo. Agregá tecnología cuando exista un problema real que la justifique.'] },
    ],
  },
  {
    slug: 'menu-digital-para-restaurantes',
    kicker: 'Carta digital',
    title: 'Cómo hacer un menú digital que la gente pueda usar',
    description: 'Una carta web rápida, actualizable y legible gana frente a un PDF diminuto o una foto enviada por WhatsApp.',
    readTime: '6 min',
    takeaway: 'El QR es apenas la puerta. El producto real es una carta rápida, legible y fácil de actualizar.',
    sections: [
      { title: 'No subas una foto de la carta', paragraphs: ['Una fotografía obliga a ampliar, se vuelve vieja cada vez que cambia un precio y no puede ser leída correctamente por buscadores ni lectores de pantalla. Un PDF suele repetir el mismo problema en otra forma.'], bullets: ['Texto real, no texto dentro de una imagen', 'Categorías visibles', 'Precios alineados', 'Descripciones breves'] },
      { title: 'Diseñá para una mano y poca señal', paragraphs: ['La mayoría abre la carta sentada, con una mano y usando datos móviles. Evitá animaciones pesadas, fotos gigantes y pasos intermedios. Mostrá primero las categorías y los platos más importantes.'], bullets: ['Tipografía de al menos 16 px', 'Buen contraste', 'Carga rápida', 'Botones suficientemente grandes'] },
      { title: 'El QR no debería encerrarte', paragraphs: ['El código QR tiene que apuntar a una dirección web de tu negocio. Si cambiás de proveedor o de diseño, conservás la misma dirección y no necesitás volver a imprimir todo.'] },
      { title: 'Conectá la carta con una acción', paragraphs: ['Según el tipo de local, cerrá la experiencia con reservar, pedir para retirar, escribir por WhatsApp o llegar con Maps. Una carta sin siguiente paso informa, pero no ayuda a vender.'] },
    ],
  },
  {
    slug: 'reservas-por-whatsapp',
    kicker: 'Reservas',
    title: 'Reservas por WhatsApp sin construir un sistema enorme',
    description: 'Una solución simple para restaurantes que todavía no necesitan turnos, mesas y automatizaciones complejas.',
    readTime: '5 min',
    takeaway: 'Para muchos locales, un mensaje bien preparado convierte mejor que instalar otra aplicación.',
    sections: [
      { title: 'Cuándo alcanza WhatsApp', paragraphs: ['Si una persona del equipo ya confirma cada reserva y el volumen es manejable, podés reducir fricción sin sumar software. El sitio prepara el mensaje; el equipo conserva la conversación.'], bullets: ['Fecha y hora', 'Cantidad de personas', 'Nombre de la reserva', 'Aclaraciones importantes'] },
      { title: 'Prepará el mensaje', paragraphs: ['Un enlace puede abrir WhatsApp con una frase lista para completar. Eso evita el clásico ida y vuelta de preguntar todos los datos por separado.'] },
      { title: 'Explicá qué pasa después', paragraphs: ['Decí si la reserva queda confirmada automáticamente o si alguien la tiene que aceptar. Aclarar la expectativa evita dobles interpretaciones y mesas vacías.'] },
      { title: 'Cuándo pasar a un sistema', paragraphs: ['Si hay varios salones, turnos, señas, listas de espera o muchas personas respondiendo a la vez, probablemente ya convenga una herramienta de reservas. La web propia puede seguir siendo la entrada y conectarse con ella.'] },
    ],
  },
  {
    slug: 'pedidos-sin-comisiones',
    kicker: 'Venta directa',
    title: 'Pedidos directos sin depender de una comisión por venta',
    description: 'Cómo usar tu propia web como canal directo sin fingir que las plataformas no tienen ningún valor.',
    readTime: '6 min',
    takeaway: 'Las plataformas pueden ayudarte a ser descubierto. Tu web sirve para que los clientes que ya te conocen vuelvan directamente.',
    sections: [
      { title: 'No es todo o nada', paragraphs: ['Podés aparecer en una plataforma y, al mismo tiempo, construir un canal propio. La diferencia es que el segundo te permite comunicarte con clientes recurrentes sin pagar por cada relación una y otra vez.'] },
      { title: 'Hacé que pedir sea obvio', paragraphs: ['Mostrá zonas, horarios, retiro, medios de pago y demoras antes de abrir la conversación. Un botón de WhatsApp con el pedido preparado es una primera versión perfectamente válida.'], bullets: ['Carta actualizada', 'Zona de entrega', 'Pedido mínimo si existe', 'Medios de pago', 'Tiempo estimado'] },
      { title: 'Usá una dirección memorable', paragraphs: ['Imprimí tu dominio en cajas, bolsas y tickets. El QR puede llevar a la carta o directamente a la sección de pedidos. Así, la próxima compra empieza en tu canal.'] },
      { title: 'Medí sin invadir', paragraphs: ['Contá visitas y clics a WhatsApp para saber qué funciona. No necesitás seguir a cada persona por internet para entender si la web genera pedidos.'] },
    ],
  },
  {
    slug: 'software-para-restaurantes-argentina',
    kicker: 'Comparativa',
    title: 'Software para restaurantes en Argentina: qué necesitás de verdad',
    description: 'Web, carta digital, reservas, pedidos, caja y stock no son el mismo producto. Separarlos ayuda a comprar mejor.',
    readTime: '8 min',
    takeaway: 'Comprá el sistema operativo que tu local necesita, pero conservá una web propia como capa pública y portátil.',
    sections: [
      { title: 'La web no reemplaza al sistema de gestión', paragraphs: ['Una web presenta el negocio y conecta al cliente. Un sistema gastronómico puede manejar mesas, comandas, caja, stock, facturación y reportes. Prometer que una cosa reemplaza a la otra genera malas compras.'], bullets: ['Presencia: web y carta', 'Conversión: reservas y pedidos', 'Operación: POS, comandas y caja', 'Administración: stock, costos y reportes'] },
      { title: 'Qué conviene mantener propio', paragraphs: ['El dominio, el contenido público, los datos exportables y el acceso a las cuentas deberían quedar bajo control del restaurante. Las integraciones pueden cambiar; esa base debería sobrevivirlas.'] },
      { title: 'Preguntas antes de contratar', paragraphs: ['Pedí respuestas concretas sobre exportación, aumentos, soporte, permanencia y qué ocurre si dejás de pagar.'], bullets: ['¿Puedo exportar productos y clientes?', '¿El dominio está a mi nombre?', '¿Hay permanencia mínima?', '¿Qué deja de funcionar si cancelo?', '¿Puedo conectar otra herramienta después?'] },
      { title: 'Una arquitectura sensata para un local chico', paragraphs: ['Empezá con web, carta y contacto directo. Sumá reservas especializadas si el volumen lo exige. Incorporá gestión cuando caja, salón o stock sean el cuello de botella. No construyas una torre tecnológica antes de tener el problema.'] },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
