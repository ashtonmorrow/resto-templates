export interface GuideSection {
  title: string;
  seoTitle?: string;
  paragraphs: string[];
  bullets?: string[];
  code?: { label: string; value: string };
  link?: { label: string; url: string };
  image?: { src: string; alt: string; caption: string };
  tip?: string;
}

export interface Guide {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  readTime: string;
  takeaway: string;
  datePublished: string;
  dateModified: string;
  recipe?: {
    time: string;
    difficulty: string;
    result: string;
    ingredients: string[];
  };
  sections: GuideSection[];
}

export const guides: Guide[] = [
  {
    slug: 'crear-web-restaurante-con-chatgpt',
    kicker: 'Receta ChatGPT',
    title: 'Cómo crear la web de tu restaurante con ChatGPT, paso a paso',
    seoTitle: 'Crear la web de un restaurante con ChatGPT',
    description: 'Una receta ilustrada en español para copiar Folio Resto, adaptarlo con ChatGPT y publicar una web propia sin quedar atado a una plataforma.',
    readTime: '15 min',
    takeaway: 'Vos ponés los datos reales y aprobás las decisiones. ChatGPT con Codex hace el trabajo repetitivo sobre una copia que sigue siendo tuya.',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    recipe: {
      time: 'Entre 60 y 90 minutos para una primera versión',
      difficulty: 'Principiante con paciencia',
      result: 'Una web de restaurante funcionando en tu propia cuenta',
      ingredients: [
        'Una cuenta de GitHub gratuita',
        'Una cuenta de ChatGPT con acceso a Codex',
        'Nombre, descripción, dirección y horarios',
        'Número de WhatsApp e Instagram',
        'Carta con precios',
        'De 6 a 10 fotos propias',
      ],
    },
    sections: [
      {
        title: 'Prepará los ingredientes antes de abrir ChatGPT',
        paragraphs: [
          'No empieces pidiéndole a la IA que invente un restaurante. Juntá primero la información que un cliente necesita para decidir: qué servís, cuánto cuesta, dónde estás, cuándo abrís y cómo reservar o pedir.',
          'Podés tener la carta en un documento, una planilla o incluso fotos legibles. ChatGPT puede ayudarte a ordenarla, pero los precios, horarios y datos de contacto tienen que salir de vos.',
        ],
        bullets: ['Nombre y una descripción corta', 'Dirección, barrio y ciudad', 'Horarios por día', 'WhatsApp con código de país', 'Carta y precios vigentes', 'Fotos del salón, la fachada y los platos'],
        tip: 'Mise en place digital: cuanto mejores sean tus ingredientes, menos tendrá que adivinar ChatGPT.',
      },
      {
        title: 'Hacé una copia en tu GitHub',
        paragraphs: [
          'Abrí el repositorio público y tocá “Use this template”. Después elegí “Create a new repository”. GitHub crea una copia independiente en tu cuenta: ésa es la versión que vas a adaptar.',
          'Poné un nombre simple, por ejemplo web-mi-restaurante. Puede ser público o privado. No necesitás tocar los archivos desde GitHub todavía.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/01-use-this-template.png', alt: 'Repositorio Folio Resto en GitHub con el menú Use this template abierto', caption: 'Paso 1. “Use this template” crea una copia editable en tu cuenta.' },
        link: { label: 'Crear mi copia en GitHub', url: 'https://github.com/ashtonmorrow/resto-templates/generate' },
      },
      {
        title: 'Abrí Codex dentro de ChatGPT y conectá GitHub',
        paragraphs: [
          'En ChatGPT, entrá a Codex y conectá tu cuenta de GitHub cuando te lo pida. Elegí solamente el repositorio nuevo que acabás de crear. La conexión común de GitHub permite consultar el código; Codex, además, puede modificarlo, ejecutar comprobaciones y preparar cambios.',
          'Los nombres de los botones pueden variar según tu plan y la versión de ChatGPT. Si no aparece Codex, consultá la disponibilidad de tu cuenta antes de seguir. Nunca pegues contraseñas, claves de Cloudflare ni datos bancarios dentro del proyecto.',
        ],
        link: { label: 'Ver la documentación oficial de ChatGPT y Codex', url: 'https://learn.chatgpt.com/docs' },
        tip: 'Dale acceso sólo a la copia de tu restaurante, no a todos tus repositorios.',
      },
      {
        title: 'Pegá este pedido inicial',
        paragraphs: [
          'Un pedido útil define el objetivo, la fuente de verdad y qué significa terminar. También obliga a ChatGPT a preguntar antes de inventar información.',
        ],
        code: {
          label: 'Pedido para ChatGPT',
          value: 'Quiero adaptar este proyecto para mi restaurante.\n\nPrimero leé README.md y CLAUDE.md. No cambies nada todavía.\nDespués haceme una lista corta de los datos que faltan.\n\nCuando te responda:\n1. Usá src/data/restaurant.ts como única fuente de datos.\n2. Ayudame a elegir una de las 15 plantillas según cómo compran mis clientes.\n3. Reemplazá Casa Rufina por mi contenido real.\n4. No inventes precios, horarios, dirección ni enlaces.\n5. Ejecutá npm run build.\n6. Revisá la versión móvil y todos los enlaces.\n7. Mostrame una vista previa y una lista de lo que debo confirmar antes de publicar.',
        },
        tip: 'No hace falta pedir “haceme una web increíble”. Este pedido concreto produce un resultado mucho más controlable.',
      },
      {
        title: 'Contestá una tanda de preguntas, como una comanda',
        paragraphs: [
          'Respondé con datos concretos. Si algo todavía no existe, decilo. Es mejor publicar sin Instagram que dejar un enlace falso. Para la carta, mantené una estructura simple de categoría, plato, descripción opcional y precio.',
          'También contale cuál es la acción principal: reservar, pedir por WhatsApp, llegar al local o mirar la carta. Esa decisión sirve para elegir la plantilla.',
        ],
        bullets: ['Acción principal del sitio', 'Tipo de local y estilo de cocina', 'Datos prácticos verificados', 'Carta vigente', 'Colores o referencias de marca', 'Fotos que realmente podés usar'],
      },
      {
        title: 'Revisá el archivo que funciona como ficha del restaurante',
        paragraphs: [
          'ChatGPT va a concentrar la información en src/data/restaurant.ts. Ese archivo alimenta nombre, historia, ubicación, horarios, WhatsApp, carta y fotografías. Tener una sola ficha evita cambiar un precio en cinco lugares distintos.',
          'Pedile que te muestre el cambio antes de aprobarlo. Buscá especialmente el número de WhatsApp, la moneda, los horarios y cualquier texto que todavía diga Casa Rufina.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/03-edit-restaurant-data.png', alt: 'Archivo restaurant.ts abierto en GitHub con los datos de demostración del restaurante', caption: 'Paso 5. Todos los datos compartidos viven en una ficha central.' },
        code: { label: 'La parte que más vas a reconocer', value: "export const restaurant = {\n  name: 'Tu restaurante',\n  city: 'Rosario',\n  whatsapp: '5493410000000',\n  hours: [/* tus horarios */],\n  menu: [/* tu carta */],\n};" },
      },
      {
        title: 'Probá una plantilla según el trabajo que tiene que hacer',
        paragraphs: [
          'No elijas sólo por color. La 06 pone carta y precios primero; la 14 lleva rápido a reservar; la 11 sirve para un local chico con horario, mapa y WhatsApp; la 13 depende de buenas fotos.',
          'Pedile a ChatGPT que prepare primero una sola opción. Mezclar tres diseños suele producir una web menos clara y tarda más.',
        ],
        link: { label: 'Comparar las 15 plantillas', url: 'https://folio.unwoke.ninja/#plantillas' },
      },
      {
        title: 'Mirá la vista previa como cliente, no como dueño',
        paragraphs: [
          'Abrí la vista previa en el teléfono. Intentá encontrar la carta, confirmar si está abierto, tocar WhatsApp y abrir el mapa sin explicaciones. Si algo importante requiere buscar demasiado, pedile a ChatGPT un ajuste puntual.',
          'Usá pedidos concretos: “el botón de reservar tiene que verse sin hacer scroll en un iPhone” o “mostrá las categorías de la carta antes de las fotos”.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/07-final-preview.png', alt: 'Vista móvil de una plantilla de restaurante terminada con carta y botón de WhatsApp', caption: 'Paso 7. La prueba importante ocurre en un teléfono y termina en una acción real.' },
        bullets: ['WhatsApp abre el número correcto', 'Maps abre la ubicación correcta', 'Los precios coinciden con la carta', 'Las fotos cargan y tienen permiso de uso', 'No quedan datos de demostración', 'La acción principal se entiende enseguida'],
      },
      {
        title: 'Publicá en una cuenta que controles',
        paragraphs: [
          'La demostración usa Cloudflare, pero el sitio es estático y puede vivir en distintos proveedores. Pedile a ChatGPT que te guíe con el proveedor que elijas y frená cuando necesite crear una cuenta, conectar un dominio o guardar una clave: esos pasos deben hacerse con tus propios accesos.',
          'Registrá el dominio con un correo del negocio. Anotá dónde está el dominio, dónde está el repositorio y dónde se publica. Esa pequeña lista es tu garantía de salida.',
        ],
        code: { label: 'Comprobación antes de publicar', value: 'npm run build' },
        link: { label: 'Ver opciones oficiales de publicación de Astro', url: 'https://docs.astro.build/es/guides/deploy/' },
      },
      {
        title: 'La prueba del plato terminado',
        paragraphs: [
          'Antes de compartir la dirección, pedile a otra persona que complete una tarea real sin ayuda: encontrar un plato, reservar o iniciar un pedido. Corregí lo que la frene y publicá una primera versión simple.',
          'Después podés volver a ChatGPT para cambiar una foto, sumar una categoría o mejorar un texto. Conservá siempre el repositorio y evitá convertir una corrección pequeña en una reconstrucción completa.',
        ],
        bullets: ['Dominio y cuentas a nombre del negocio', 'Copia completa en GitHub', 'Build exitoso', 'Revisión en teléfono', 'Carta, horarios y enlaces confirmados', 'Una persona externa pudo completar la acción principal'],
      },
    ],
  },
  {
    slug: 'crear-pagina-web-restaurante-con-ia',
    kicker: 'Guía técnica',
    title: 'Cómo crear la web de un restaurante con IA y código propio',
    seoTitle: 'Crear una web de restaurante con IA',
    description: 'Una guía práctica para copiar una plantilla abierta, adaptarla con Claude, Codex o Cursor y publicarla en una cuenta que controles.',
    readTime: '12 min',
    takeaway: 'La IA acelera el trabajo, pero la propiedad depende de algo más simple: conservar el repositorio, el dominio y la cuenta de publicación.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    sections: [
      {
        title: 'Qué vas a construir',
        paragraphs: [
          'Folio Resto no es un generador que guarda tu negocio dentro de una plataforma. Es un proyecto web estático y abierto: HTML, CSS, imágenes y datos que se compilan en archivos rápidos. La demostración incluye quince composiciones, pero un restaurante real necesita publicar solamente la que mejor resuelva su venta principal.',
          'El resultado puede mostrar carta, horarios, ubicación, fotografías y botones de WhatsApp o reservas. No necesita una base de datos para arrancar. Eso reduce costo, mantenimiento y puntos de falla.',
        ],
        bullets: ['Código en tu propia cuenta de GitHub', 'Dominio registrado a nombre del negocio', 'Publicación en una cuenta que puedas cambiar de proveedor', 'Contenido editable desde un archivo central'],
        link: { label: 'Abrir el repositorio público', url: 'https://github.com/ashtonmorrow/resto-templates' },
      },
      {
        title: '1. Hacé tu propia copia',
        paragraphs: [
          'Entrá al repositorio y usá “Use this template”. GitHub crea un proyecto nuevo en tu cuenta con todos los archivos, el historial empieza limpio y podés decidir si la copia será pública o privada. También podés descargar un ZIP, aunque una cuenta de GitHub hace más fácil guardar versiones y volver atrás.',
          'Para ver el proyecto en tu computadora necesitás Node.js. Instalá las dependencias una sola vez y levantá una vista previa local. La dirección suele ser http://localhost:4321.',
        ],
        code: { label: 'Terminal', value: 'npm install\nnpm run dev' },
      },
      {
        title: '2. Entendé el mapa antes de pedir cambios',
        paragraphs: [
          'La estructura está separada por responsabilidad. Los datos del restaurante viven en un solo lugar; las quince páginas deciden cómo ordenarlos; los bloques reutilizables muestran carta, horarios, galería, ubicación y reservas; los tokens controlan colores y tipografías.',
          'Esta separación importa cuando trabajás con IA. En vez de pedir “haceme una web”, podés señalar una fuente de verdad y evitar que el asistente duplique precios, teléfonos o textos en muchos archivos.',
        ],
        code: { label: 'Estructura', value: 'src/\n├── data/restaurant.ts      # datos del negocio\n├── pages/t/01.astro        # una composición\n├── components/blocks/      # carta, horarios, reserva…\n└── styles/tokens.css       # color y tipografía\npublic/images/              # fotos propias' },
      },
      {
        title: '3. Reemplazá la ficha del restaurante',
        paragraphs: [
          'Abrí src/data/restaurant.ts. El objeto restaurant funciona como formulario de alta: nombre, descripción, cocina, precio, dirección, teléfono, WhatsApp, horarios, coordenadas, carta y fotografías. Cuando cambiás un dato ahí, todas las composiciones que lo usan reciben la actualización.',
          'Pedile al asistente que conserve la forma del objeto y reemplace únicamente los valores. Para WhatsApp usá el número completo con código de país y sin signos. Verificá precios, horarios y enlaces manualmente antes de publicar.',
        ],
        code: { label: 'src/data/restaurant.ts', value: "export const restaurant = {\n  name: 'Tu restaurante',\n  city: 'Rosario',\n  whatsapp: '5493410000000',\n  whatsappMsg: 'Hola, quiero reservar una mesa.',\n  hours: [\n    { days: 'Martes a Domingo', time: '19:30 – 00:30' },\n  ],\n  menu: [/* categorías y platos */],\n};" },
      },
      {
        title: '4. Elegí una composición por su trabajo',
        paragraphs: [
          'No elijas sólo por color. La plantilla 06 pone carta y precios primero; la 14 reduce el camino hasta reservar; la 11 sirve para un local que sólo necesita horario, mapa y WhatsApp; la 13 vende principalmente con fotografía. Abrí cada demo desde el teléfono y elegí según la acción que más valor genera.',
          'Después podés borrar las otras rutas o dejarlas fuera de navegación. Una base bien elegida necesita menos instrucciones y produce un resultado más coherente que mezclar cinco diseños desde el comienzo.',
        ],
        link: { label: 'Comparar las 15 plantillas', url: 'https://folio.unwoke.ninja/#plantillas' },
      },
      {
        title: '5. Usá un pedido acotado para la IA',
        paragraphs: [
          'Un buen pedido le da al asistente un objetivo, una fuente de verdad y una definición de terminado. También le indica que haga preguntas antes de inventar datos. Esto funciona con Claude Code, Codex, Cursor u otra herramienta capaz de leer una carpeta.',
        ],
        code: { label: 'Pedido inicial', value: 'Leé README.md y CLAUDE.md. Quiero usar la plantilla 06 para mi pizzería.\nAntes de editar, preguntame sólo por los datos que falten.\nMantené src/data/restaurant.ts como fuente única.\nReemplazá el contenido de demostración y las fotos.\nDespués ejecutá npm run build, revisá los enlaces y enumerá todo lo que debo verificar desde el teléfono.' },
      },
      {
        title: '6. Revisá lo que la IA no puede saber',
        paragraphs: [
          'Un build exitoso no demuestra que el negocio esté bien representado. Abrí la web en un teléfono real y comprobá el camino completo de un cliente. Tocá cada enlace, iniciá una reserva, abrí Maps y verificá que la carta se lea con mala señal y sin ampliar.',
        ],
        bullets: ['Nombre, dirección y horarios reales', 'Precios y moneda actualizados', 'WhatsApp abre la conversación correcta', 'Texto alternativo describe cada foto', 'No queda ninguna mención a Casa Rufina', 'El botón principal aparece sin buscarlo'],
      },
      {
        title: '7. Publicá sin regalar la propiedad',
        paragraphs: [
          'Ejecutá el build final y publicá la carpeta dist en Cloudflare, Netlify, Vercel o cualquier hosting estático. El proveedor puede cambiar; el repositorio y el dominio deberían sobrevivir ese cambio. Registrá el dominio con un correo del negocio y guardá los accesos en un gestor de contraseñas.',
          'El proyecto original incluye configuración para Cloudflare porque así funciona la demostración. Si usás otro proveedor, no necesitás reescribir el sitio: sólo cambia el paso de publicación.',
        ],
        code: { label: 'Verificación final', value: 'npm run build' },
        link: { label: 'Documentación de despliegue de Astro', url: 'https://docs.astro.build/es/guides/deploy/' },
      },
      {
        title: 'Qué conviene contratar y qué conservar',
        paragraphs: [
          'Es razonable pagar ayuda para dirección visual, fotografía, carga de una carta extensa, configuración del dominio o revisión técnica. El límite sano es que la persona que ayuda trabaje dentro de cuentas tuyas o entregue los accesos y una copia completa al terminar.',
          'No necesitás convertirte en desarrollador. Sí necesitás poder identificar dónde está el dominio, dónde está el código, dónde se publica y qué servicio se cobra todos los meses. Esa pequeña lista es la diferencia entre recibir ayuda y quedar encerrado.',
        ],
      },
    ],
  },
  {
    slug: 'como-crear-la-web-de-tu-restaurante',
    kicker: 'Guía base',
    title: 'Cómo crear la página web de tu restaurante',
    seoTitle: 'Cómo crear la web de tu restaurante',
    description: 'Qué necesitás, qué podés evitar y cómo salir online sin entregarle tu negocio a una plataforma.',
    readTime: '7 min',
    takeaway: 'Una web gastronómica útil no necesita ser compleja. Tiene que contestar rápido qué ofrecés, dónde estás, cuándo abrís y cómo reservar o pedir.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    sections: [
      { title: 'Primero: definí qué trabajo tiene que hacer', paragraphs: ['La web no es un folleto decorativo. Para un restaurante chico suele tener cuatro trabajos: mostrar la carta, explicar el lugar, responder dudas prácticas y convertir visitas en reservas o pedidos.'], bullets: ['Carta legible desde el celular', 'Horarios y ubicación actualizados', 'Un botón claro para reservar', 'Un camino corto para pedir por WhatsApp'] },
      { title: 'Dominio, contenido y publicación', paragraphs: ['Comprá el dominio a nombre del negocio. Guardá las fotos y la carta en formatos que puedas reutilizar. Publicá el sitio en una cuenta que controles. Esas tres decisiones evitan que una agencia o plataforma se convierta en la dueña práctica de tu presencia digital.'], bullets: ['Dominio registrado por vos', 'Acceso a la cuenta de publicación', 'Copia descargable del sitio', 'Contraseñas en un gestor seguro'] },
      { title: 'Elegí una base, no una hoja en blanco', paragraphs: ['Una plantilla específica para gastronomía ya resuelve jerarquía, carta, ubicación, fotografías y botones de conversión. Elegí por la forma en que vende tu negocio: una parrilla necesita atmósfera; una pizzería necesita precios y pedidos; un bar concurrido necesita reservas.'], bullets: ['Cambiá marca, colores y tipografía', 'Reemplazá el contenido de demostración', 'Probá todo desde un teléfono', 'Publicá y mejorá después'], link: { label: 'Ver una implementación completa con IA', url: 'https://folio.unwoke.ninja/guias/crear-pagina-web-restaurante-con-ia/' } },
      { title: 'Lo que puede esperar', paragraphs: ['No hace falta arrancar con cuentas de usuario, una aplicación propia, un sistema de puntos o un panel complicado. Primero resolvé descubrimiento y contacto directo. Agregá tecnología cuando exista un problema real que la justifique.'] },
    ],
  },
  {
    slug: 'menu-digital-para-restaurantes',
    kicker: 'Carta digital',
    title: 'Cómo hacer un menú digital que la gente pueda usar',
    seoTitle: 'Menú digital para restaurantes: guía',
    description: 'Una carta web rápida, actualizable y legible gana frente a un PDF diminuto o una foto enviada por WhatsApp.',
    readTime: '6 min',
    takeaway: 'El QR es apenas la puerta. El producto real es una carta rápida, legible y fácil de actualizar.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    sections: [
      { title: 'No subas una foto de la carta', paragraphs: ['Una fotografía obliga a ampliar, se vuelve vieja cada vez que cambia un precio y no puede ser leída correctamente por buscadores ni lectores de pantalla. Un PDF suele repetir el mismo problema en otra forma. Una carta en HTML se adapta a la pantalla, se puede buscar y permite cambiar un precio sin volver a diseñar todo.'], bullets: ['Texto real, no texto dentro de una imagen', 'Categorías visibles', 'Precios alineados', 'Descripciones breves'], code: { label: 'Estructura mínima', value: '<section aria-labelledby="pastas">\n  <h2 id="pastas">Pastas caseras</h2>\n  <article>\n    <h3>Sorrentinos de jamón y queso</h3>\n    <p>Salsa fileto, crema o mixta.</p>\n    <strong>$13.900</strong>\n  </article>\n</section>' } },
      { title: 'Diseñá para una mano y poca señal', paragraphs: ['La mayoría abre la carta sentada, con una mano y usando datos móviles. Evitá animaciones pesadas, fotos gigantes y pasos intermedios. Mostrá primero las categorías y los platos más importantes.'], bullets: ['Tipografía de al menos 16 px', 'Buen contraste', 'Carga rápida', 'Botones suficientemente grandes'] },
      { title: 'El QR no debería encerrarte', paragraphs: ['El código QR tiene que apuntar a una dirección web de tu negocio. Si cambiás de proveedor o de diseño, conservás la misma dirección y no necesitás volver a imprimir todo.'] },
      { title: 'Conectá la carta con una acción', paragraphs: ['Según el tipo de local, cerrá la experiencia con reservar, pedir para retirar, escribir por WhatsApp o llegar con Maps. Una carta sin siguiente paso informa, pero no ayuda a vender.'] },
    ],
  },
  {
    slug: 'reservas-por-whatsapp',
    kicker: 'Reservas',
    title: 'Reservas por WhatsApp sin construir un sistema enorme',
    seoTitle: 'Reservas por WhatsApp para restaurantes',
    description: 'Una solución simple para restaurantes que todavía no necesitan turnos, mesas y automatizaciones complejas.',
    readTime: '5 min',
    takeaway: 'Para muchos locales, un mensaje bien preparado convierte mejor que instalar otra aplicación.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    sections: [
      { title: 'Cuándo alcanza WhatsApp', paragraphs: ['Si una persona del equipo ya confirma cada reserva y el volumen es manejable, podés reducir fricción sin sumar software. El sitio prepara el mensaje; el equipo conserva la conversación.'], bullets: ['Fecha y hora', 'Cantidad de personas', 'Nombre de la reserva', 'Aclaraciones importantes'] },
      { title: 'Prepará el mensaje', paragraphs: ['Un enlace puede abrir WhatsApp con una frase lista para completar. Eso evita el clásico ida y vuelta de preguntar todos los datos por separado. El número debe incluir código de país y área, sin espacios ni signos; el texto va codificado dentro de la URL.'], code: { label: 'Enlace de ejemplo', value: '<a href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20reservar%20para...">\n  Reservar por WhatsApp\n</a>' } },
      { title: 'Explicá qué pasa después', paragraphs: ['Decí si la reserva queda confirmada automáticamente o si alguien la tiene que aceptar. Aclarar la expectativa evita dobles interpretaciones y mesas vacías.'] },
      { title: 'Cuándo pasar a un sistema', paragraphs: ['Si hay varios salones, turnos, señas, listas de espera o muchas personas respondiendo a la vez, probablemente ya convenga una herramienta de reservas. La web propia puede seguir siendo la entrada y conectarse con ella.'] },
    ],
  },
  {
    slug: 'pedidos-sin-comisiones',
    kicker: 'Venta directa',
    title: 'Pedidos directos sin depender de una comisión por venta',
    seoTitle: 'Pedidos directos para restaurantes',
    description: 'Cómo usar tu propia web como canal directo sin fingir que las plataformas no tienen ningún valor.',
    readTime: '6 min',
    takeaway: 'Las plataformas pueden ayudarte a ser descubierto. Tu web sirve para que los clientes que ya te conocen vuelvan directamente.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
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
    seoTitle: 'Software para restaurantes en Argentina',
    description: 'Web, carta digital, reservas, pedidos, caja y stock no son el mismo producto. Separarlos ayuda a comprar mejor.',
    readTime: '8 min',
    takeaway: 'Comprá el sistema operativo que tu local necesita, pero conservá una web propia como capa pública y portátil.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-18',
    sections: [
      { title: 'La web no reemplaza al sistema de gestión', paragraphs: ['Una web presenta el negocio y conecta al cliente. Un sistema gastronómico puede manejar mesas, comandas, caja, stock, facturación y reportes. Prometer que una cosa reemplaza a la otra genera malas compras.'], bullets: ['Presencia: web y carta', 'Conversión: reservas y pedidos', 'Operación: POS, comandas y caja', 'Administración: stock, costos y reportes'] },
      { title: 'Qué conviene mantener propio', paragraphs: ['El dominio, el contenido público, los datos exportables y el acceso a las cuentas deberían quedar bajo control del restaurante. Las integraciones pueden cambiar; esa base debería sobrevivirlas.'] },
      { title: 'Separá la compra en cuatro capas', paragraphs: ['Comparar “software para restaurantes” como si fuera un solo producto mezcla problemas distintos. Escribí qué capa está fallando antes de pedir demostraciones. Un proveedor puede cubrir varias, pero seguí evaluándolas por separado.'], bullets: ['Presencia: sitio, carta, horarios y ubicación', 'Venta: pedidos, reservas, delivery y fidelización', 'Operación: mesas, comandas, cocina y caja', 'Administración: facturación, stock, costos y reportes'] },
      { title: 'Preguntas antes de contratar', paragraphs: ['Pedí respuestas concretas sobre exportación, aumentos, soporte, permanencia y qué ocurre si dejás de pagar.'], bullets: ['¿Puedo exportar productos y clientes?', '¿El dominio está a mi nombre?', '¿Hay permanencia mínima?', '¿Qué deja de funcionar si cancelo?', '¿Puedo conectar otra herramienta después?'] },
      { title: 'Cómo hacer una prueba que sirva', paragraphs: ['No evalúes una demo con productos perfectos y un salón vacío. Cargá diez platos reales, dos modificadores, una promoción, un cierre de caja y un pedido que cambie de estado. Pedile a la persona que va a usarlo durante un turno que complete la prueba.'], bullets: ['Tiempo para cargar o cambiar un precio', 'Qué ocurre si se corta internet', 'Cómo se corrige una comanda', 'Cómo se exportan ventas y productos', 'Tiempo y canal de respuesta del soporte'] },
      { title: 'Una arquitectura sensata para un local chico', paragraphs: ['Empezá con web, carta y contacto directo. Sumá reservas especializadas si el volumen lo exige. Incorporá gestión cuando caja, salón o stock sean el cuello de botella. No construyas una torre tecnológica antes de tener el problema.', 'La web propia no compite con el software operativo: funciona como una capa pública estable. Si cambiás de caja o sistema de pedidos, tus clientes pueden seguir encontrando la misma dirección, carta y canales de contacto.'] },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
