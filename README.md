# Folio Resto

Quince bases abiertas para crear la web de un restaurante. Todas usan la misma información de demostración, para que puedas comparar decisiones de diseño sin cambiar de marca, carta o fotografías.

Sitio en vivo: [folio.unwoke.ninja](https://folio.unwoke.ninja/)

## Empezar sin experiencia técnica

1. Tocá **Use this template** arriba de esta página para crear una copia en tu cuenta.
2. Descargá tu copia o abrila con Claude Code, Codex, Cursor u otro asistente de programación.
3. Pedile que lea `README.md` y `CLAUDE.md` antes de cambiar nada.
4. Elegí una base en `src/pages/t/` y reemplazá la información de demostración.
5. Revisá la versión móvil y publicala en una cuenta que controles.

Podés arrancar pegando este pedido:

> Quiero adaptar Folio Resto para mi negocio gastronómico. Primero leé el README y CLAUDE.md. Conservá la estructura y preguntame solamente por los datos que falten: nombre, tipo de local, ciudad, carta, horarios, WhatsApp, dirección, reservas, colores y fotos. Después reemplazá el contenido de demostración, verificá la versión móvil y explicame cómo publicarlo en una cuenta que yo controle.

## Dónde se cambia cada cosa

- `src/data/restaurant.ts`: nombre, historia, carta, horarios, ubicación, WhatsApp y redes.
- `src/pages/t/01.astro` a `src/pages/t/15.astro`: las quince composiciones.
- `src/styles/tokens.css`: colores y tipografías de cada estilo.
- `public/images/`: fotografías del restaurante y de los platos.
- `astro.config.mjs`: dirección pública del sitio.

El contenido compartido evita tener que cambiar la carta quince veces. Elegí una sola composición para tu sitio final; las demás pueden seguir como referencia o eliminarse.

## Ejecutar el proyecto

Necesitás una versión reciente de Node.js.

```bash
npm install
npm run dev
```

Astro mostrará una dirección local, normalmente `http://localhost:4321`.

Para generar la versión lista para publicar:

```bash
npm run build
```

Los archivos terminados quedan en `dist/` y funcionan en cualquier hosting estático. El comando `npm run deploy` está preparado para Cloudflare, pero no es obligatorio usar ese proveedor.

## Antes de publicar

- Registrá el dominio a nombre del restaurante.
- Conservá acceso a la cuenta donde se publica.
- Reemplazá todas las fotos y datos de Casa Rufina.
- Probá carta, WhatsApp, reservas, Maps y redes desde un teléfono.
- Actualizá `astro.config.mjs`, `public/robots.txt` y `public/sitemap.xml` con tu dominio.
- Guardá una copia del código y de las credenciales en un lugar seguro.

## Licencia

Código bajo licencia MIT. Podés copiarlo, modificarlo y usarlo para tu negocio o para clientes. Las fotografías incluidas son material de demostración: reemplazalas antes de publicar un sitio real.
