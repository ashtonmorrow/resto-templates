# Folio

Este repositorio contiene las guías de Folio y el proyecto de demostración
Folio Resto. El recorrido empieza con una referencia de diseño, sigue por los
archivos que controlan la página y termina con una revisión del cambio.

Sitio en vivo: [folio.unwoke.ninja](https://folio.unwoke.ninja/)

## Estructura del sitio

- `/`: presentación de Folio y entrada al recorrido.
- `/aprender/`: primera práctica guiada.
- `/guias/`: biblioteca de aprendizaje.
- `/ejemplos/`: proyectos abiertos que se pueden visitar y copiar.
- `/t/01/` a `/t/15/`: versiones visuales del primer ejemplo.

## Primer ejemplo: Folio Resto

Folio Resto es una web gastronómica con quince direcciones visuales. Todas usan
la misma información de demostración, para que puedas comparar decisiones de
diseño sin cambiar de marca, carta o fotografías.

## Hacer una copia y abrirla

1. Tocá **Use this template** arriba de esta página para crear una copia en tu cuenta.
2. Abrí Codex dentro de ChatGPT, conectá tu cuenta de GitHub y elegí solamente tu copia.
3. Pedile que lea `README.md` y `CLAUDE.md` antes de cambiar nada.
4. Elegí una base en `src/pages/t/` y reemplazá la información de demostración.
5. Revisá la versión móvil y publicala en una cuenta que controles.

Para ubicarte en el proyecto antes de editar, pegá este pedido:

> Quiero adaptar Folio Resto para mi negocio gastronómico. Primero leé el README y CLAUDE.md. Conservá la estructura y preguntame solamente por los datos que falten: nombre, tipo de local, ciudad, carta, horarios, WhatsApp, dirección, reservas, colores y fotos. Después reemplazá el contenido de demostración, verificá la versión móvil y explicame cómo publicarlo en una cuenta que yo controle.

Guía ilustrada en español: [crear la web de tu restaurante con ChatGPT](https://folio.unwoke.ninja/guias/crear-web-restaurante-con-chatgpt/).

Si venís del diseño y recién empezás con código: [del diseño a una web real con IA](https://folio.unwoke.ninja/guias/del-diseno-a-una-web-con-ia/).

## Dónde se cambia cada cosa

- `src/data/restaurant.ts`: nombre, historia, carta, horarios, ubicación, WhatsApp y redes.
- `src/pages/t/01.astro` a `src/pages/t/15.astro`: las quince composiciones.
- `src/styles/tokens.css`: colores y tipografías de cada estilo.
- `public/images/`: fotografías del restaurante y de los platos.
- `astro.config.mjs`: dirección pública del sitio.

El contenido compartido evita tener que cambiar la carta quince veces. Elegí una sola composición para tu sitio final; las demás pueden seguir como referencia o eliminarse.

## Ejecutar el proyecto

Necesitás Node.js 24. Si usás `nvm`, el archivo `.nvmrc` selecciona esa versión.

```bash
nvm use
npm ci
npm run dev
```

Astro mostrará una dirección local, normalmente `http://localhost:4321`.

Antes de publicar, ejecutá la comprobación completa:

```bash
npm run verify
```

La comprobación revisa tipos, tests, build, rutas, anclas, sitemap e imágenes. Los
archivos terminados quedan en `dist/` y funcionan en cualquier hosting estático.

Para probar también la navegación y los formularios en tamaños de teléfono y
escritorio, instalá Chromium una vez y ejecutá la revisión de navegador:

```bash
npx playwright install chromium
npm run test:browser
```

`npm run deploy` publica el Folio original en su cuenta de Cloudflare. No lo
ejecutes desde una copia: primero elegí un proveedor, creá una cuenta del negocio
y reemplazá `wrangler.jsonc` por la configuración de esa cuenta.

## Antes de publicar

- Registrá el dominio a nombre del restaurante.
- Conservá acceso a la cuenta donde se publica.
- Reemplazá todas las fotos y datos de Casa Rufina.
- Probá carta, WhatsApp, reservas, Maps y redes desde un teléfono.
- Actualizá `astro.config.mjs` y `public/robots.txt` con tu dominio. El sitemap se
  genera desde las páginas compiladas para que no quede desactualizado.
- Guardá una copia del código y de las credenciales en un lugar seguro.

## Editar las guías

La voz instructiva está definida en `voice/VOICE.md`. Después de modificar la
prosa de `src/data/guides.ts`, ejecutá:

```bash
npm run lint:voice
```

El comando detecta hábitos mecánicos. La lista de comprobación humana del perfil
de voz sigue siendo obligatoria.

## Licencia

Código bajo licencia MIT. Podés copiarlo, modificarlo y usarlo para tu negocio o para clientes. Las fotografías incluidas son material de demostración: reemplazalas antes de publicar un sitio real.
