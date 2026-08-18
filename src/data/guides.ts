export interface GuideSection {
  title: string;
  seoTitle?: string;
  paragraphs: string[];
  bullets?: string[];
  code?: { label: string; value: string };
  link?: { label: string; url: string };
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
  sections: GuideSection[];
}

export const guides: Guide[] = [
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
