export interface GuideLink {
  label: string;
  url: string;
  note?: string;
}

export interface GuideTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface GuideSection {
  title: string;
  seoTitle?: string;
  paragraphs: string[];
  bullets?: string[];
  code?: { label: string; value: string };
  link?: GuideLink;
  links?: GuideLink[];
  table?: GuideTable;
  image?: { src: string; alt: string; caption: string };
  tip?: string;
}

export interface Guide {
  slug: string;
  kicker: string;
  title: string;
  seoTitle?: string;
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
    description: 'Una receta ilustrada para copiar Folio Resto, cargar datos reales, revisar el resultado y publicar una web que siga siendo tuya.',
    readTime: '15 min',
    takeaway: 'El trabajo no empieza con un prompt. Empieza con la carta, los horarios, los accesos y una copia del proyecto bajo tu control.',
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
        title: 'Prepará los datos antes de abrir ChatGPT',
        paragraphs: [
          'Juntá primero la información que una persona necesita para decidir: qué servís, cuánto cuesta, dónde estás, cuándo abrís y cómo reservar o pedir. No le pidas a la IA que complete huecos con información inventada.',
          'La carta puede estar en un documento, una planilla o fotos legibles. ChatGPT puede ordenarla. Los precios, horarios, enlaces y datos de contacto tienen que salir del negocio.',
        ],
        bullets: ['Nombre y descripción corta', 'Dirección, barrio y ciudad', 'Horarios por día', 'WhatsApp con código de país', 'Carta y precios vigentes', 'Fotos propias del salón, la fachada y los platos'],
        tip: 'Marcá cualquier dato pendiente como PENDIENTE. Es más fácil encontrar esa palabra que detectar una dirección inventada.',
      },
      {
        title: 'Hacé una copia en tu GitHub',
        paragraphs: [
          'Abrí el repositorio público y tocá “Use this template”. Después elegí “Create a new repository”. GitHub crea una copia independiente en tu cuenta.',
          'Poné un nombre simple, por ejemplo web-mi-restaurante. La copia es el lugar donde ChatGPT hará los cambios y donde queda el historial para volver atrás.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/01-use-this-template.png', alt: 'Repositorio Folio Resto en GitHub con el menú Use this template abierto', caption: '“Use this template” crea un repositorio nuevo. No modifica el proyecto original.' },
        links: [
          { label: 'Crear una copia de Folio Resto', url: 'https://github.com/ashtonmorrow/resto-templates/generate' },
          { label: 'Leer el README', url: 'https://github.com/ashtonmorrow/resto-templates#readme' },
        ],
      },
      {
        title: 'Abrí Codex y conectá sólo esa copia',
        paragraphs: [
          'En ChatGPT, entrá a Codex y conectá tu cuenta de GitHub cuando te lo pida. Elegí solamente el repositorio nuevo. La conexión común de GitHub permite consultar código. Codex también puede modificarlo, ejecutar comprobaciones y preparar cambios.',
          'Los nombres de los botones y la disponibilidad pueden variar según el plan. No pegues contraseñas, claves de Cloudflare ni datos bancarios dentro del proyecto.',
        ],
        links: [{ label: 'Documentación oficial de ChatGPT y Codex', url: 'https://learn.chatgpt.com/docs' }],
        tip: 'Dale acceso a la copia del restaurante, no a todos tus repositorios.',
      },
      {
        title: 'Pegá un pedido que obligue a preguntar',
        paragraphs: ['El pedido inicial tiene que nombrar la fuente de datos y la comprobación final. También tiene que frenar al asistente cuando falte información.'],
        code: {
          label: 'Pedido inicial para ChatGPT',
          value: 'Quiero adaptar este proyecto para mi restaurante.\n\nPrimero leé README.md y CLAUDE.md. No cambies nada todavía.\nDespués haceme una lista corta de los datos que faltan.\n\nCuando te responda:\n1. Usá src/data/restaurant.ts como única fuente de datos.\n2. Ayudame a elegir una de las 15 plantillas según la acción principal.\n3. Reemplazá Casa Rufina por mi contenido real.\n4. No inventes precios, horarios, dirección, disponibilidad ni enlaces.\n5. Señalá cualquier texto fijo de la plantilla que también deba verificarse.\n6. Ejecutá npm run build.\n7. Revisá la versión móvil y todos los enlaces.\n8. Mostrame una vista previa y una lista de pendientes antes de publicar.',
        },
      },
      {
        title: 'Respondé como si completaras una ficha de alta',
        paragraphs: [
          'Contestá con datos concretos. Si todavía no hay Instagram, reservas o delivery, decilo. Es mejor ocultar una función que publicar un enlace que no funciona.',
          'Definí una acción principal: reservar, pedir por WhatsApp, llegar al local o mirar la carta. Esa decisión sirve para elegir la composición y ordenar los botones.',
        ],
        bullets: ['Acción principal', 'Tipo de local y cocina', 'Datos prácticos verificados', 'Carta vigente', 'Colores o referencias de marca', 'Fotos con permiso de uso'],
      },
      {
        title: 'Revisá la ficha central del restaurante',
        paragraphs: [
          'Los datos compartidos viven en src/data/restaurant.ts. El archivo alimenta el nombre, la historia, la ubicación, los horarios, WhatsApp, la carta y las fotografías.',
          'Revisá el número de WhatsApp, la moneda, los horarios, las coordenadas y cualquier mención a Casa Rufina. Mirá también la plantilla elegida: algunas demostraciones contienen textos fijos que no salen de la ficha central.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/03-edit-restaurant-data.png', alt: 'Archivo restaurant.ts abierto en GitHub con los datos de demostración', caption: 'La ficha central evita cambiar el mismo precio o teléfono en varios archivos.' },
        code: { label: 'Parte reconocible de restaurant.ts', value: "export const restaurant = {\n  name: 'Tu restaurante',\n  city: 'Rosario',\n  whatsapp: '5493410000000',\n  hours: [/* tus horarios */],\n  menu: [/* tu carta */],\n};" },
      },
      {
        title: 'Elegí una plantilla por la acción',
        paragraphs: [
          'La 06 muestra carta y precios enseguida. La 14 prepara una solicitud de reserva. La 11 concentra horario, mapa y WhatsApp. La 13 depende de tener buenas fotografías.',
          'Prepará primero una sola opción. Mezclar varias composiciones agrega trabajo y suele esconder la acción principal.',
        ],
        links: [{ label: 'Comparar las 15 plantillas', url: 'https://folio.unwoke.ninja/#plantillas' }],
      },
      {
        title: 'Probá el sitio como cliente',
        paragraphs: [
          'Abrí la vista previa en el teléfono. Buscá la carta, comprobá el horario, tocá WhatsApp y abrí el mapa sin explicaciones. El build puede terminar bien y el número de teléfono seguir equivocado.',
          'Pedí cambios observables: “mostrá el botón de reservar antes del primer scroll” o “poné las categorías de la carta antes de la galería”.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/07-final-preview.png', alt: 'Vista móvil de una plantilla con carta y botón de WhatsApp', caption: 'La revisión termina en una acción real: abrir la carta, el mapa o WhatsApp.' },
        bullets: ['WhatsApp abre el número correcto', 'Maps abre la ubicación correcta', 'Los precios coinciden con la carta', 'Las fotos tienen permiso de uso', 'No quedan datos de demostración', 'La acción principal se entiende sin ayuda'],
      },
      {
        title: 'Publicá desde cuentas del negocio',
        paragraphs: [
          'La demostración usa Cloudflare, pero el sitio es estático y puede publicarse en distintos proveedores. Frená cuando el proceso pida crear una cuenta, conectar un dominio o guardar una clave. Esos pasos se hacen con accesos del negocio.',
          'Anotá dónde está el dominio, dónde está el repositorio y dónde se publica. Guardá los accesos en un gestor de contraseñas.',
        ],
        code: { label: 'Comprobación antes de publicar', value: 'npm run build' },
        links: [{ label: 'Opciones oficiales de publicación de Astro', url: 'https://docs.astro.build/es/guides/deploy/' }],
      },
      {
        title: 'Hacé una prueba sin explicar nada',
        paragraphs: [
          'Dale el teléfono a otra persona y pedile una tarea: encontrar un plato, solicitar una reserva o iniciar un pedido. No le indiques dónde tocar.',
          'Corregí el primer punto donde se frena. Después publicá una versión simple y conservá el repositorio para los cambios futuros.',
        ],
        bullets: ['Dominio y cuentas a nombre del negocio', 'Copia completa en GitHub', 'Build exitoso', 'Revisión en teléfono', 'Carta, horarios y enlaces confirmados', 'Una persona externa completó la acción principal'],
      },
    ],
  },
  {
    slug: 'como-crear-la-web-de-tu-restaurante',
    kicker: 'Antes del diseño',
    title: 'Qué necesita la web de un restaurante antes de elegir diseño',
    seoTitle: 'Qué necesita una web para restaurantes',
    description: 'Una ficha de contenido, un mapa de acciones y una lista de cuentas para preparar la web sin empezar por colores o animaciones.',
    readTime: '9 min',
    takeaway: 'La primera versión tiene que responder preguntas concretas. El diseño organiza esas respuestas. No puede inventarlas.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'Empezá por cinco preguntas de cliente',
        paragraphs: [
          'Una persona que llega desde Google, Instagram o un QR necesita saber qué servís, cuánto cuesta, dónde estás, cuándo abrís y qué puede hacer ahora. Esas respuestas forman el contenido mínimo.',
          'Casa Rufina es una marca inventada para comparar plantillas. Sus precios, dirección y horarios no sirven como base para un negocio real.',
        ],
        table: {
          columns: ['Pregunta', 'Respuesta visible', 'Fuente interna'],
          rows: [
            ['¿Qué sirven?', 'Descripción y categorías de carta', 'Carta vigente'],
            ['¿Cuánto cuesta?', 'Precios y moneda', 'Sistema o lista de precios'],
            ['¿Dónde queda?', 'Dirección, barrio y mapa', 'Ubicación verificada'],
            ['¿Cuándo abre?', 'Horarios por día', 'Horario operativo'],
            ['¿Cómo sigo?', 'Reservar, pedir, llamar o llegar', 'Proceso real del equipo'],
          ],
        },
      },
      {
        title: 'Completá una ficha antes de contratar o abrir ChatGPT',
        paragraphs: ['Esta ficha se puede pegar en un correo, documento o conversación. Si una respuesta falta, dejala marcada. No hace falta rellenarla con lenguaje de marca todavía.'],
        code: { label: 'Ficha de contenido', value: 'NOMBRE:\nTIPO DE LOCAL:\nCIUDAD Y BARRIO:\nDIRECCIÓN EXACTA:\nHORARIOS POR DÍA:\nACCIÓN PRINCIPAL:\nWHATSAPP CON CÓDIGO DE PAÍS:\nINSTAGRAM:\nENLACE DE MAPA:\nCARTA Y FECHA DE ACTUALIZACIÓN:\nMÉTODO DE RESERVA:\nMÉTODO DE PEDIDO:\nFOTOS DISPONIBLES Y AUTOR:' },
      },
      {
        title: 'Elegí una acción principal',
        paragraphs: ['Un sitio puede incluir varias acciones, pero la cabecera necesita una prioridad. La acción depende del cuello de botella del negocio, no del efecto visual de un botón.'],
        table: {
          columns: ['Situación', 'Acción principal', 'Dato que debe estar listo'],
          rows: [
            ['Salón con mesas disponibles', 'Reservar', 'Proceso y responsable de confirmar'],
            ['Rotisería o take away', 'Encargar', 'Carta, horario de corte y zona'],
            ['Bar sin reservas', 'Cómo llegar', 'Mapa y horario actualizado'],
            ['Restaurante de destino', 'Ver carta', 'Precios, platos y buenas fotografías'],
          ],
        },
      },
      {
        title: 'Dibujá una página antes de elegir plantilla',
        paragraphs: ['Una primera página puede resolverse con seis bloques. El orden cambia según la acción principal, pero cada bloque tiene una función que se puede comprobar.'],
        bullets: ['Cabecera: nombre, tipo de cocina y acción principal', 'Carta: categorías, platos, precios y fecha de vigencia', 'Datos prácticos: dirección y horarios', 'Prueba visual: fotos propias con descripciones', 'Historia: sólo lo que ayuda a entender el local', 'Cierre: repetir contacto, mapa y redes'],
      },
      {
        title: 'Decidí quién controla cada cuenta',
        paragraphs: ['Dominio, repositorio y publicación son tres cuentas distintas. Pueden estar administradas por la misma persona, pero tienen que quedar documentadas.'],
        table: {
          columns: ['Activo', 'Titular recomendado', 'Dato para guardar'],
          rows: [
            ['Dominio', 'Negocio', 'Registrador, renovación y correo'],
            ['Código', 'Negocio o cuenta compartida', 'Repositorio y administradores'],
            ['Hosting', 'Negocio', 'Proveedor, proyecto y facturación'],
            ['Analytics', 'Negocio', 'Propiedad y usuarios'],
            ['WhatsApp y redes', 'Negocio', 'Número, correo y recuperación'],
          ],
        },
      },
      {
        title: 'Compará formas de construir sin mezclar productos',
        paragraphs: ['Una plantilla abierta, un constructor visual, una persona independiente y una plataforma gastronómica resuelven trabajos distintos. Pedí siempre el costo inicial, el costo mensual, la forma de exportar y quién mantiene el contenido.'],
        table: {
          columns: ['Camino', 'Sirve cuando', 'Pregunta incómoda'],
          rows: [
            ['Plantilla abierta + IA', 'Hay tiempo para revisar y aprender', '¿Quién se ocupa del dominio y la publicación?'],
            ['Profesional independiente', 'Querés delegar la implementación', '¿Las cuentas y el código quedan a mi nombre?'],
            ['Constructor visual', 'El equipo editará con frecuencia', '¿Qué puedo exportar si cancelo?'],
            ['Plataforma gastronómica', 'La web debe conectarse con operación', '¿Qué parte deja de funcionar sin el abono?'],
          ],
        },
      },
      {
        title: 'Dejá estas funciones para una necesidad comprobada',
        paragraphs: [
          'Cuentas de usuario, puntos, stock, pagos integrados, delivery automático y un panel propio agregan mantenimiento. Incorporalos cuando exista un proceso, una persona responsable y un volumen que justifique el costo.',
          'Una página con carta, horarios, ubicación y contacto puede publicarse primero. Después se mide qué pregunta o tarea sigue consumiendo tiempo del equipo.',
        ],
        links: [
          { label: 'Seguir la receta con ChatGPT', url: 'https://folio.unwoke.ninja/guias/crear-web-restaurante-con-chatgpt/' },
          { label: 'Comparar las 15 composiciones', url: 'https://folio.unwoke.ninja/#plantillas' },
        ],
      },
    ],
  },
  {
    slug: 'menu-digital-para-restaurantes',
    kicker: 'Carta digital',
    title: 'Menú digital para restaurantes: HTML, PDF o foto',
    seoTitle: 'Menú digital para restaurantes: guía práctica',
    description: 'Una comparación de formatos, una estructura HTML y una prueba móvil para publicar una carta que se pueda leer y mantener.',
    readTime: '10 min',
    takeaway: 'El QR sólo abre una dirección. La calidad depende del formato que aparece después y de cómo se actualizan los precios.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'Compará el archivo que recibe el cliente',
        paragraphs: ['Una foto conserva el diseño impreso, pero obliga a ampliar. Un PDF puede funcionar si fue diseñado para una pantalla chica, aunque muchos son hojas A4 reducidas. HTML permite que el texto se reordene según el ancho y que cada precio sea contenido editable.'],
        table: {
          columns: ['Formato', 'Lectura móvil', 'Actualizar un precio', 'Buscadores y lectores de pantalla'],
          rows: [
            ['HTML', 'Se adapta al ancho', 'Cambiar un dato y publicar', 'Texto estructurado'],
            ['PDF móvil', 'Depende del diseño', 'Exportar y reemplazar archivo', 'Variable según cómo fue creado'],
            ['Foto', 'Suele requerir zoom', 'Tomar y subir otra imagen', 'El texto queda dentro de píxeles'],
          ],
        },
        tip: 'Abrí el archivo real desde un teléfono. “Es un PDF” no dice si se puede leer.',
      },
      {
        title: 'Una carta HTML puede seguir pareciendo una carta',
        paragraphs: [
          'La versión de demostración separa categorías, nombre, descripción y precio. Cada pieza sigue siendo texto y puede cambiar de posición en una pantalla angosta.',
          'El diseño no necesita convertir todos los platos en tarjetas. La estructura semántica puede presentarse como lista, columnas o bloques.',
        ],
        image: { src: '/images/guides/menu-digital/menu-mobile.png', alt: 'Carta HTML de Casa Rufina vista en un teléfono con categorías y precios legibles', caption: 'La plantilla 06 muestra categorías y precios como texto real. Casa Rufina y sus valores son demostrativos.' },
        code: { label: 'Estructura mínima de un plato', value: '<section aria-labelledby="pastas">\n  <h2 id="pastas">Pastas caseras</h2>\n  <article>\n    <h3>Sorrentinos de jamón y queso</h3>\n    <p>Salsa fileto, crema o mixta.</p>\n    <strong>$13.900</strong>\n  </article>\n</section>' },
      },
      {
        title: 'Definí una regla para cada dato',
        paragraphs: ['El diseño se rompe cuando cada plato usa una convención distinta. Antes de cargar, definí cómo se escriben moneda, porciones, variantes y descripciones.'],
        table: {
          columns: ['Dato', 'Regla de ejemplo', 'Error que evita'],
          rows: [
            ['Precio', '$13.900', 'Mezclar $13.9, 13900 y 13.900 ARS'],
            ['Cantidad', 'Empanadas de carne (2 u.)', 'Que el cliente adivine la porción'],
            ['Variantes', 'Copa $4.500 · Botella $22.000', 'Dos importes sin explicación'],
            ['Disponibilidad', 'Sólo mediodía', 'Prometer un plato fuera de turno'],
            ['Alérgenos', 'Confirmar con el equipo', 'Convertir una etiqueta incompleta en garantía'],
          ],
        },
      },
      {
        title: 'El precio necesita una fuente y una fecha',
        paragraphs: [
          'Elegí una fuente de verdad: el sistema de gestión, una planilla aprobada o el archivo del sitio. Anotá quién actualiza y qué otros canales deben cambiar al mismo tiempo.',
          'Después de una actualización, compará cinco platos al azar entre la fuente y la web. Revisá también promociones, adicionales y productos agotados.',
        ],
        bullets: ['Fecha de última revisión', 'Persona responsable', 'Fuente original', 'Cinco precios comparados', 'Enlace publicado abierto desde el QR'],
      },
      {
        title: 'El QR tiene que apuntar a una dirección controlable',
        paragraphs: [
          'Imprimí un QR que abra una URL de tu dominio, por ejemplo restaurante.com/menu. Si después cambia el proveedor o el formato, esa dirección puede redirigir al nuevo destino.',
          'Probá el QR impreso con más de un teléfono y desde la distancia real de la mesa. Guardá el archivo usado para imprimirlo.',
        ],
        code: { label: 'Dirección estable', value: 'https://turestaurante.com/menu/' },
      },
      {
        title: 'Hacé una prueba incómoda',
        paragraphs: [
          'Usá un teléfono chico, aumentá el tamaño del texto y simulá una conexión lenta. Buscá una categoría, un plato y un precio sin girar la pantalla.',
          'El criterio de reflow de WCAG explica que el contenido debe poder reacomodarse sin obligar a desplazar en dos direcciones. Las imágenes que aportan información también necesitan una alternativa textual.',
        ],
        bullets: ['Texto aumentado sin superposiciones', 'Una sola dirección de scroll', 'Contraste legible', 'Categorías identificables', 'Botones separados', 'Peso de imágenes razonable'],
        links: [
          { label: 'WCAG 2.2: reflow', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html' },
          { label: 'WCAG 2.2: contenido no textual', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html' },
        ],
      },
      {
        title: 'Cerrá la carta con el siguiente paso real',
        paragraphs: [
          'Después del último plato, repetí horario, ubicación y la acción disponible. Si el local no toma pedidos online, no muestres un botón que simule hacerlo.',
          'Probá la carta completa desde el QR hasta WhatsApp, el mapa o la reserva. La última pantalla tiene que coincidir con el proceso que el equipo puede atender.',
        ],
        links: [{ label: 'Abrir la carta de demostración', url: 'https://folio.unwoke.ninja/t/06/' }],
      },
    ],
  },
  {
    slug: 'reservas-por-whatsapp',
    kicker: 'Reservas manuales',
    title: 'Reservas por WhatsApp: flujo, mensajes y límites',
    seoTitle: 'Reservas por WhatsApp para restaurantes',
    description: 'Cómo preparar una solicitud, diferenciar pedido de confirmación y saber cuándo una conversación deja de alcanzar.',
    readTime: '9 min',
    takeaway: 'Un enlace de WhatsApp prepara una solicitud. La mesa sólo está reservada cuando una persona o sistema confirma disponibilidad.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'Primero, nombrá correctamente el resultado',
        paragraphs: [
          'El formulario de Folio arma un mensaje con nombre, personas, día y horario. Después abre WhatsApp. No consulta inventario de mesas ni bloquea un turno.',
          'La interfaz original decía “confirmación inmediata”. Era incorrecto y ya fue reemplazado por una explicación de que la solicitud queda pendiente hasta que el local responda.',
        ],
        image: { src: '/images/guides/reservas-whatsapp/form-mobile.png', alt: 'Formulario móvil que prepara una solicitud de reserva para enviar por WhatsApp', caption: 'El formulario reduce preguntas. WhatsApp sigue siendo el canal donde el local confirma o rechaza.' },
      },
      {
        title: 'Pedí los datos que cambian la disponibilidad',
        paragraphs: ['Nombre, fecha, hora y cantidad de personas suelen alcanzar para una primera solicitud. Sumá una aclaración libre si el local puede procesarla. No pidas documento, domicilio o información médica para una reserva ordinaria.'],
        bullets: ['Nombre', 'Cantidad de personas', 'Fecha', 'Horario', 'Aclaración opcional'],
        code: { label: 'Mensaje preparado', value: 'Hola, quiero solicitar una reserva.\nNombre: Ana Pérez\nPersonas: 4\nFecha: 29/08\nHorario: 21:00\nAclaración: mesa accesible, si hay disponibilidad.' },
      },
      {
        title: 'Construí el enlace sin guardar datos en la web',
        paragraphs: [
          'El navegador puede tomar los valores del formulario, armar el texto y abrir wa.me. Folio no necesita enviar la solicitud a una base propia.',
          'El número se escribe con código de país y área, sin espacios ni signos. encodeURIComponent evita que saltos de línea y caracteres especiales rompan la URL.',
        ],
        code: { label: 'JavaScript abreviado', value: "const msg = `Hola, quiero solicitar una reserva.\\nNombre: ${nombre}\\nPersonas: ${personas}\\nFecha: ${fecha}\\nHorario: ${hora}`;\nwindow.open(`https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`, '_blank');" },
      },
      {
        title: 'Usá cuatro estados, aunque sea en una planilla',
        paragraphs: ['El problema operativo empieza después del mensaje. Una planilla, agenda o sistema tiene que distinguir las solicitudes nuevas de las reservas confirmadas.'],
        table: {
          columns: ['Estado', 'Significado', 'Respuesta corta'],
          rows: [
            ['Recibida', 'Todavía no se revisó disponibilidad', 'Recibimos tu solicitud. Te confirmamos en breve.'],
            ['Confirmada', 'La mesa quedó registrada', 'Reserva confirmada para 4, sábado 21:00.'],
            ['Alternativa', 'Ese turno no está disponible', 'A las 21:00 no tenemos lugar. Hay 20:00 o 22:30.'],
            ['Cancelada', 'La mesa volvió a liberarse', 'Cancelación registrada. Gracias por avisar.'],
          ],
        },
      },
      {
        title: 'Definí quién responde y en cuánto tiempo',
        paragraphs: [
          'Publicá el horario de atención de reservas y asigná una persona por turno. Si varias personas usan el mismo WhatsApp, elegí un registro compartido para evitar dos confirmaciones sobre la misma mesa.',
          'No prometas respuesta inmediata si el teléfono queda sin atender durante el servicio.',
        ],
        code: { label: 'Registro mínimo', value: 'fecha,hora,nombre,personas,estado,responsable,nota\n2026-08-29,21:00,Ana Pérez,4,confirmada,Lucía,mesa accesible' },
      },
      {
        title: 'WhatsApp deja de alcanzar cuando aparece inventario',
        paragraphs: [
          'Varios salones, turnos estrictos, señas, listas de espera, mesas combinables y muchas personas respondiendo crean un problema de inventario. Un calendario o conversación ya no muestra todo el estado.',
          'En ese punto conviene probar un sistema de reservas. La web puede conservar el dominio y reemplazar el enlace por el flujo nuevo.',
        ],
        bullets: ['Dos o más personas confirman a la vez', 'Se cobran señas', 'Hay lista de espera', 'Las mesas se combinan', 'Se necesitan recordatorios y cancelaciones', 'El equipo pierde conversaciones'],
      },
      {
        title: 'Probá el recorrido completo',
        paragraphs: ['Enviá una solicitud desde otro teléfono. Confirmala, cambiala de horario y cancelala. Revisá qué queda registrado y qué mensaje recibe la persona en cada paso.'],
        bullets: ['Número correcto', 'Fecha sin ambigüedad', 'Mensaje legible', 'Estado registrado', 'Responsable asignado', 'Texto de confirmación explícito'],
        links: [{ label: 'Probar la demostración de reservas', url: 'https://folio.unwoke.ninja/t/14/' }],
      },
    ],
  },
  {
    slug: 'crear-pagina-web-restaurante-con-ia',
    kicker: 'Código abierto',
    title: 'Cómo está armado Folio Resto: archivos, componentes y datos',
    seoTitle: 'Código de una web para restaurantes',
    description: 'Un recorrido por el código real: dónde vive la carta, cómo se arman las 15 composiciones y qué revisar antes de publicar.',
    readTime: '11 min',
    takeaway: 'Folio Resto compila páginas estáticas. La carta y los datos compartidos viven en un archivo. Cada plantilla decide cómo mostrarlos.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'El mapa real del proyecto',
        paragraphs: [
          'Folio Resto usa Astro para convertir componentes y datos en HTML, CSS e imágenes estáticas. No hay una base de datos, un panel administrativo ni una cuenta de cliente detrás de la demostración.',
          'El repositorio contiene 15 composiciones gastronómicas y las páginas del estudio que las explican. El build del 22 de agosto de 2026 generó 25 rutas estáticas.',
        ],
        table: {
          columns: ['Ruta', 'Responsabilidad', 'Cambio habitual'],
          rows: [
            ['src/data/restaurant.ts', 'Datos compartidos', 'Carta, horarios, WhatsApp, dirección y fotos'],
            ['src/pages/t/01.astro … 15.astro', 'Composición', 'Orden de bloques y textos propios'],
            ['src/components/blocks/', 'Piezas reutilizables', 'Carta, horarios, ubicación, galería y botones'],
            ['src/styles/tokens.css', 'Sistema visual', 'Colores, tipografías, radios y ancho'],
            ['public/images/', 'Archivos públicos', 'Fotografías y capturas'],
          ],
        },
        links: [{ label: 'Abrir el repositorio público', url: 'https://github.com/ashtonmorrow/resto-templates' }],
      },
      {
        title: 'restaurant.ts funciona como contrato de contenido',
        paragraphs: [
          'El tipo Restaurant enumera los campos que el sitio acepta. El objeto restaurant contiene la demostración de Casa Rufina. Cambiar ese objeto actualiza todos los componentes que lo importan.',
          'El archivo no valida que un dato sea cierto. Un WhatsApp con la cantidad correcta de dígitos puede pertenecer a otra persona.',
        ],
        image: { src: '/images/guides/chatgpt-recipe/03-edit-restaurant-data.png', alt: 'Código de restaurant.ts con el objeto central', caption: 'Nombre, carta, horarios, enlaces y fotografías comparten una sola ficha.' },
        code: { label: 'Contrato abreviado', value: "export interface Restaurant {\n  name: string;\n  address: string;\n  whatsapp: string;\n  hours: HoursRow[];\n  menu: MenuCategory[];\n  hero: Media[];\n}\n\nexport const restaurant: Restaurant = { /* datos */ };" },
      },
      {
        title: 'Una página importa bloques y decide el orden',
        paragraphs: [
          'La plantilla 06 importa Menu, About, Book y SiteFooter. El archivo coloca primero una cabecera, después la carta y finalmente la historia del local. Otra plantilla puede usar los mismos datos con otro orden.',
          'La arquitectura evita copiar la carta dentro de cada página. También deja visibles las excepciones: cualquier frase escrita directamente en una plantilla necesita una revisión separada.',
        ],
        code: { label: 'src/pages/t/06.astro, abreviado', value: "import Menu from '../../components/blocks/Menu.astro';\nimport Book from '../../components/blocks/Book.astro';\nimport { restaurant } from '../../data/restaurant';\n\n<h1>{restaurant.name}</h1>\n<Book label=\"Reservar\" />\n<Menu variant=\"cards\" heading=\"La Carta\" />" },
      },
      {
        title: 'Los bloques tienen trabajos específicos',
        paragraphs: ['Un bloque recibe datos y devuelve una parte de la página. Menu recorre las categorías y platos. Hours recorre los horarios. Book construye un enlace wa.me. Location usa la dirección y las coordenadas.'],
        table: {
          columns: ['Bloque', 'Lee de restaurant.ts', 'Salida'],
          rows: [
            ['Menu.astro', 'menu', 'Categorías, platos, descripciones y precios'],
            ['Book.astro', 'whatsapp y mensaje', 'Enlace de WhatsApp codificado'],
            ['Hours.astro', 'hours', 'Filas de días y horarios'],
            ['Location.astro', 'address, city y geo', 'Dirección y enlace de mapa'],
            ['Gallery.astro', 'gallery', 'Imágenes con texto alternativo'],
          ],
        },
      },
      {
        title: 'Los tokens cambian el sistema visual',
        paragraphs: ['Cada tema define variables como fondo, texto, acento, tipografía y radio. Cambiar una variable modifica todos los selectores que la usan.'],
        code: { label: 'Tema abreviado', value: "[data-theme='studio'] {\n  --bg: #f4efe4;\n  --text: #171714;\n  --accent: #e94b32;\n  --acid: #d8ff3e;\n  --font-body: 'Inter', sans-serif;\n}" },
      },
      {
        title: 'Los textos fijos son la zona de riesgo',
        paragraphs: [
          'Una revisión encontró frases de demostración fuera de restaurant.ts. La plantilla 14 afirmaba “confirmación inmediata” aunque el formulario sólo abría WhatsApp. La plantilla 06 mostraba un botón de delivery sin destino real.',
          'Esos casos ya fueron corregidos. Una copia anterior puede conservarlos. Buscá promesas de disponibilidad, tiempos de entrega, capacidad de grupos y enlaces con href="#".',
        ],
        code: { label: 'Búsqueda rápida', value: "rg -n \"confirmación|abierto hoy|delivery|href=\\\"#\\\"|Casa Rufina\" src public" },
        tip: 'Que un texto compile no significa que sea cierto.',
      },
      {
        title: 'El build comprueba estructura, no negocio',
        paragraphs: ['npm run build detecta errores que impiden generar las páginas. Después hay que abrir las rutas, tocar los enlaces y comparar la carta con la fuente original.'],
        table: {
          columns: ['Comprobación', 'Qué detecta', 'Qué no detecta'],
          rows: [
            ['npm run build', 'Errores de importación y compilación', 'Teléfono, precio o dirección equivocados'],
            ['Revisión móvil', 'Desbordes y jerarquía visual', 'Disponibilidad real de una mesa'],
            ['Prueba de enlaces', 'Destinos rotos o vacíos', 'Quién responde el mensaje'],
            ['Segunda persona', 'Pasos confusos', 'Cumplimiento fiscal'],
          ],
        },
      },
      {
        title: 'Qué agregar y qué dejar afuera',
        paragraphs: [
          'El proyecto resuelve presencia pública, carta y contacto. Un POS, facturación electrónica, stock o reservas con inventario de mesas pertenecen a otra capa. Se pueden enlazar, pero no conviene simularlos con texto.',
          'Antes de sumar una dependencia, escribí el problema operativo, quién la mantiene y qué deja de funcionar si se cancela.',
        ],
        links: [
          { label: 'Leer las instrucciones para asistentes', url: 'https://github.com/ashtonmorrow/resto-templates/blob/master/CLAUDE.md' },
          { label: 'Ver las 15 composiciones', url: 'https://github.com/ashtonmorrow/resto-templates/tree/master/src/pages/t' },
        ],
      },
    ],
  },
  {
    slug: 'pedidos-sin-comisiones',
    kicker: 'Venta directa',
    title: 'Pedidos directos por WhatsApp: costos, flujo y límites',
    seoTitle: 'Pedidos directos por WhatsApp para restaurantes',
    description: 'Un modelo de costos, un mensaje estructurado y una prueba operativa para saber si un canal directo realmente mejora el pedido.',
    readTime: '10 min',
    takeaway: 'Directo no significa gratis. Significa que el restaurante elige y puede medir el pago, la entrega, el embalaje y el trabajo de atención.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'Separá descubrimiento de repetición',
        paragraphs: [
          'Una plataforma puede traer una primera compra. El dominio, el packaging y el ticket pueden ofrecer un camino directo para la siguiente. Los dos canales pueden convivir.',
          'Antes de mover pedidos, verificá que el canal directo muestre la misma carta, zona, horarios y disponibilidad que el equipo puede cumplir.',
        ],
        image: { src: '/images/guides/pedidos-directos/order-mobile.png', alt: 'Página móvil de rotisería con un botón Encargar por WhatsApp', caption: 'La plantilla 15 abre WhatsApp con un mensaje de pedido. No procesa pago ni asigna repartidor.' },
      },
      {
        title: 'Calculá el costo completo de cada canal',
        paragraphs: [
          'No compares sólo una comisión porcentual con cero. En el canal directo también existen cobro, reparto, embalaje, descuentos, errores y tiempo de atención.',
          'Usá un mes real. Reemplazá cada supuesto por datos de liquidaciones, recibos y horas del equipo.',
        ],
        code: { label: 'Modelo por canal', value: 'Ventas cobradas\n− comisión o costo de cobro\n− costo de reparto\n− embalaje\n− descuentos financiados por el local\n− devoluciones y errores\n− horas de atención × costo por hora\n= margen después del canal' },
        table: {
          caption: 'Ejemplo ilustrativo. No representa una tarifa de mercado.',
          columns: ['Dato', 'Plataforma', 'Canal directo'],
          rows: [
            ['100 pedidos × $25.000', '$2.500.000', '$2.500.000'],
            ['Comisión o cobro', 'Completar con liquidación', 'Completar con medio de pago'],
            ['Reparto', 'Incluido o separado', 'Propio o tercero'],
            ['Atención', 'Medir carga manual', 'Medir minutos por pedido'],
            ['Resultado', 'Calcular', 'Calcular'],
          ],
        },
      },
      {
        title: 'Publicá las reglas antes del botón',
        paragraphs: ['Zona, pedido mínimo, retiro, horario de corte, medios de pago y tiempo estimado pertenecen a la página. Si la persona descubre una restricción después de escribir, el canal sólo trasladó el trabajo a WhatsApp.'],
        bullets: ['Barrios o radio de entrega', 'Costo de envío', 'Pedido mínimo', 'Horario de recepción', 'Tiempo estimado y forma de confirmarlo', 'Medios de pago', 'Política de cambios o faltantes'],
      },
      {
        title: 'Estructurá el mensaje para que se pueda copiar a cocina',
        paragraphs: ['Un mensaje libre obliga a interpretar cada pedido. Prepará campos y pedí una línea por producto. La respuesta del local debe confirmar total, dirección, forma de pago y tiempo.'],
        code: { label: 'Pedido preparado', value: 'Hola, quiero hacer un pedido.\nNombre: Ana\nEntrega o retiro: retiro\nPedido:\n- 2 empanadas de carne\n- 1 sorrentinos con fileto\nForma de pago: a confirmar\nAclaración: sin cubiertos' },
      },
      {
        title: 'Definí el recorrido dentro del local',
        paragraphs: ['El botón sólo entrega una conversación. Escribí quién toma el pedido, quién verifica stock, quién calcula el total, dónde se imprime o copia la comanda y quién cambia el estado.'],
        table: {
          columns: ['Paso', 'Responsable', 'Prueba'],
          rows: [
            ['Recibir', 'Caja o teléfono', 'El mensaje no queda sin leer'],
            ['Validar', 'Caja o cocina', 'Producto y zona disponibles'],
            ['Cotizar', 'Caja', 'Total y envío coinciden con la carta'],
            ['Confirmar', 'Caja', 'Cliente acepta total y demora'],
            ['Preparar', 'Cocina', 'La comanda conserva aclaraciones'],
            ['Entregar', 'Mostrador o reparto', 'Pedido y pago quedan cerrados'],
          ],
        },
      },
      {
        title: 'Medí el canal sin seguir personas',
        paragraphs: [
          'Contá aperturas del botón y pedidos confirmados. La diferencia muestra conversaciones abandonadas, problemas de disponibilidad o una llamada a la acción confusa.',
          'Registrá fuente, importe, estado y motivo de cancelación. No hace falta construir perfiles publicitarios para saber si el proceso funciona.',
        ],
        code: { label: 'Registro semanal', value: 'semana,clics_whatsapp,pedidos_confirmados,ventas,cancelados,motivo_principal\n2026-35,84,31,775000,9,fuera_de_zona' },
      },
      {
        title: 'Directo puede incluir proveedores',
        paragraphs: [
          'Una tienda propia también puede cobrar por transacción o usar reparto externo. Fudo publica para Tu Delivery una tasa de servicio de 1,9% más IVA por venta, con opción de trasladarla al cliente. Ese dato era vigente el 22 de agosto de 2026 y puede cambiar.',
          'Pedí por escrito el costo fijo, el porcentaje, quién financia descuentos, qué pasa con devoluciones y cómo se exportan pedidos y clientes.',
        ],
        links: [{ label: 'Tarifa publicada de Tu Delivery en Fudo', url: 'https://fu.do/es-ar/tu-delivery/' }],
      },
      {
        title: 'Hacé una prueba de cinco pedidos distintos',
        paragraphs: [
          'Probá retiro, entrega, producto agotado, cambio después de confirmar y devolución. Medí minutos y errores desde el primer mensaje hasta el cierre.',
          'Si el volumen obliga a copiar mensajes entre varias pantallas, compará una tienda o integración que ingrese el pedido al sistema operativo.',
        ],
        links: [{ label: 'Abrir la plantilla de pedidos', url: 'https://folio.unwoke.ninja/t/15/' }],
      },
    ],
  },
  {
    slug: 'software-para-restaurantes-argentina',
    kicker: 'Comparación fechada',
    title: 'Software para restaurantes en Argentina: qué comparar en 2026',
    seoTitle: 'Software para restaurantes en Argentina 2026',
    description: 'Fudo, Bistrosoft, Tango Restô y una web propia comparados por trabajo, precios publicados, facturación, operación y salida.',
    readTime: '14 min',
    takeaway: 'Caja, cocina, facturación, reservas, pedidos y presencia pública tienen costos y dependencias distintas.',
    datePublished: '2026-08-18',
    dateModified: '2026-08-22',
    sections: [
      {
        title: 'Primero, separá las capas',
        paragraphs: ['Una web publica carta, horario y contacto. Un POS registra ventas y caja. Un sistema gastronómico puede sumar mesas, comandas, recetas, stock, delivery, facturación y reportes. Comprar todo como un paquete impide ver qué problema resuelve cada módulo.'],
        table: {
          columns: ['Capa', 'Trabajo', 'Ejemplo de comprobación'],
          rows: [
            ['Presencia', 'Web, carta, ubicación', 'Cambiar un precio y abrirlo desde Google'],
            ['Venta', 'Pedido, reserva, cobro', 'Completar una operación y cancelarla'],
            ['Operación', 'Mesas, comandas, cocina, caja', 'Mover mesa y corregir comanda'],
            ['Administración', 'Stock, recetas, compras, reportes', 'Exportar ventas y valorizar inventario'],
            ['Fiscal', 'Comprobantes y contingencia', 'Emitir, anular y recuperar una factura'],
          ],
        },
      },
      {
        title: 'Comparación basada en información publicada',
        paragraphs: ['La tabla usa páginas oficiales consultadas el 22 de agosto de 2026. No reemplaza una cotización. Los precios en pesos pueden cambiar y los módulos alteran el total.'],
        table: {
          columns: ['Opción', 'Modelo y precio visible', 'Funciones verificadas', 'Dato pendiente'],
          rows: [
            ['Fudo', 'Suscripción. Inicial $22.500, Avanzado $43.900 y Pro $69.500 por mes', 'Caja, comandas y carta QR. Inventario desde Avanzado. Múltiples cajas desde Pro', 'Sumar módulos y confirmar impuestos'],
            ['Bistrosoft', 'Suscripción mensual, precio por consulta', 'POS, reportes, recetas, facturación y módulos de tienda, cocina, móvil y salón', 'Cotización, instalación y exportaciones'],
            ['Tango Restô', 'Licencia por consulta. Soporte adicional desde $38.500 + IVA por mes', 'Salón, mobile Android, cocina, stock, delivery, pagos y backoffice', 'Licencias, módulos, infraestructura y puesta en marcha'],
            ['Folio Resto', 'Código MIT sin licencia. Dominio y hosting por separado', 'Web, carta, horarios, mapa y enlaces', 'No incluye POS, stock ni facturación'],
          ],
        },
        links: [
          { label: 'Precios oficiales de Fudo', url: 'https://fu.do/es-ar/precios/' },
          { label: 'Preguntas frecuentes de Bistrosoft', url: 'https://bistrosoft.com/ar/preguntas-frecuentes/' },
          { label: 'Funciones y soporte de Tango Restô', url: 'https://www.axoft.com/tango/software-para-gastronomia-restaurant/' },
        ],
      },
      {
        title: 'Leé el precio de Fudo como una suma de módulos',
        paragraphs: [
          'Fudo publica usuarios ilimitados y soporte dentro de los planes. El Plan Inicial incluye ventas por mostrador, caja, comandas, descuentos y carta QR. Inventario, recetas y proveedores aparecen en Avanzado. Pro suma múltiples cajas, listas de precios e inventario valorizado.',
          'La gestión de mesas se publicaba a $8.500 mensuales, facturación electrónica a $13.500, integración con apps de delivery a $19.500 y recepcionista IA a $55.000. Sumá sólo los módulos de la prueba y guardá una captura de la cotización.',
        ],
        code: { label: 'Ejemplo de suma, agosto de 2026', value: 'Plan Inicial            $22.500\nGestión de Mesas          $8.500\nFacturación Electrónica  $13.500\n                         -------\nSubtotal publicado       $44.500/mes\n\nConfirmar impuestos, descuentos y vigencia.' },
      },
      {
        title: 'Bistrosoft y Tango requieren una cotización operativa',
        paragraphs: [
          'Bistrosoft informa una suscripción mensual con módulos adicionales para tienda online, cocina, móvil, salón y facturación. La página pública consultada no muestra el abono exacto. La cotización tiene que enumerar licencias, módulos, equipos, migración y soporte.',
          'Tango Restô publica funciones amplias de salón, cocina, stock, delivery, mobile y administración. También muestra paquetes de soporte, pero esos importes no son el precio total de las licencias. Pedí ambas cifras por separado.',
        ],
        bullets: ['Licencia o abono base', 'Cada terminal, caja o sucursal', 'Módulos y conectores', 'Instalación y migración', 'Capacitación', 'Soporte ordinario y de urgencia', 'Actualizaciones', 'Exportación al salir'],
      },
      {
        title: 'Facturación electrónica merece una prueba propia',
        paragraphs: [
          'ARCA permite operar con Comprobantes en Línea y también publica web services para integrar facturación. Que un proveedor diga “facturación electrónica” no explica qué comprobantes emite, cómo anula, qué punto de venta usa ni qué ocurre sin conexión.',
          'Pedí una demostración con la condición fiscal del negocio. Consultá a la persona contable antes de decidir el circuito.',
        ],
        table: {
          columns: ['Prueba', 'Resultado que hay que ver'],
          rows: [
            ['Venta a consumidor final', 'Comprobante, CAE y forma de entrega'],
            ['Nota de crédito', 'Vinculación y registro correcto'],
            ['Caída de internet', 'Procedimiento de contingencia documentado'],
            ['Cierre de caja', 'Totales conciliables con comprobantes'],
            ['Exportación', 'Archivo legible para administración o estudio'],
          ],
        },
        links: [
          { label: 'Factura electrónica de ARCA', url: 'https://arca.gob.ar/fe/' },
          { label: 'Web services oficiales', url: 'https://arca.gob.ar/ws/documentacion/ws-factura-electronica.asp' },
        ],
        tip: 'Esta guía no da asesoramiento impositivo. El circuito se valida con el estudio contable y la documentación vigente.',
      },
      {
        title: 'Hacé una demo con datos imperfectos',
        paragraphs: ['No mires una presentación con productos ya cargados. Usá diez platos reales, dos modificadores, una promoción, un producto agotado, una mesa dividida y una devolución.'],
        bullets: ['Crear plato y variante', 'Cambiar precio durante el turno', 'Mover y dividir mesa', 'Enviar y corregir comanda', 'Marcar agotado', 'Cobrar con dos medios', 'Emitir y anular comprobante', 'Cerrar caja', 'Exportar ventas y productos'],
      },
      {
        title: 'Probá la conexión y el soporte',
        paragraphs: [
          'Fudo declara que puede funcionar sobre 3G o 4G si el proveedor móvil responde. Tango ofrece distintos niveles de soporte, incluidos paquetes con atención de urgencia. Esas promesas tienen que convertirse en una prueba y un número de contrato.',
          'Desconectá la red en una demostración controlada. Preguntá qué tareas siguen, qué queda en cola y cómo se recupera el turno. Después enviá una consulta real al soporte y medí la respuesta.',
        ],
        code: { label: 'Incidente de prueba', value: 'Viernes 22:15\n- Internet principal caído\n- 14 mesas abiertas\n- 3 pedidos en cocina\n- una factura pendiente\n\n¿Qué puede seguir haciendo cada puesto?\n¿Qué dato se recupera automáticamente?' },
      },
      {
        title: 'La salida también forma parte del producto',
        paragraphs: [
          'Pedí una exportación antes de firmar. Productos, clientes, ventas, recetas y proveedores pueden salir en formatos distintos o no estar incluidos. Abrí los archivos y comprobá identificadores, columnas y fechas.',
          'El dominio y la web pública pueden permanecer separados del POS. Si cambiás el sistema operativo, los clientes siguen usando la misma dirección mientras se reemplaza la integración.',
        ],
        table: {
          columns: ['Antes de contratar', 'Evidencia'],
          rows: [
            ['Precio total', 'Cotización con módulos e impuestos'],
            ['Permanencia', 'Cláusula y fecha de baja'],
            ['Exportación', 'Archivo de muestra abierto'],
            ['Soporte', 'Horario, canal y nivel contratado'],
            ['Contingencia', 'Procedimiento probado'],
            ['Propiedad', 'Dominio y cuentas a nombre del negocio'],
          ],
        },
      },
      {
        title: 'Dónde entra una web propia',
        paragraphs: [
          'Folio Resto no compite con Fudo, Bistrosoft o Tango en caja, stock o facturación. Funciona como capa pública: carta, horario, ubicación, marca y acceso a los canales disponibles.',
          'El POS puede cambiar sin obligar a cambiar el dominio. La integración puede ser un enlace, una tienda embebida o un desarrollo específico, según lo que el proveedor permita.',
        ],
        links: [
          { label: 'Ver qué contiene Folio Resto', url: 'https://folio.unwoke.ninja/' },
          { label: 'Revisar el código abierto', url: 'https://github.com/ashtonmorrow/resto-templates' },
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
