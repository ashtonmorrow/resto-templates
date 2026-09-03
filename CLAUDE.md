# Instrucciones para asistentes

Este repositorio contiene Folio, una guía para aprender a construir con IA, y
Folio Resto, su primer proyecto de demostración. La guía es la identidad
principal del sitio. El restaurante es un ejemplo abierto que se puede copiar y
adaptar.

## Antes de editar

1. Leé `voice/VOICE.md` si el pedido modifica una guía o texto instructivo.
2. Si el pedido modifica Folio Resto, preguntá cuál de las quince plantillas
   quiere usar.
3. Para adaptar el ejemplo, pedí únicamente los datos del negocio que falten.
4. Explicá cualquier decisión que afecte dominio, cuentas, pagos o publicación.

## Reglas del proyecto

- Conservá la jerarquía del sitio: Folio en `/`, aprendizaje en `/aprender/`,
  guías en `/guias/` y demostraciones en `/ejemplos/`.
- No presentes Folio Resto como la identidad completa de Folio.
- Mantené los datos comunes en `src/data/restaurant.ts`.
- Reutilizá los componentes de `src/components/blocks/`.
- Preferí cambiar tokens en `src/styles/tokens.css` antes que duplicar estilos.
- No agregues base de datos, autenticación, panel administrativo ni servicios pagos salvo que exista una necesidad concreta y el dueño lo acepte.
- No incrustes secretos ni credenciales en el repositorio.
- Conservá HTML semántico, foco visible, contraste suficiente y botones cómodos en pantallas táctiles.
- Ejecutá `npm run lint:voice` después de editar guías o texto instructivo.
- Ejecutá `npm run verify` antes de dar el trabajo por terminado. Esa comprobación
  incluye tipos, tests, build, rutas, anclas, sitemap e imágenes.

## Entrega esperada para Folio Resto

- El dominio y la cuenta de publicación pertenecen al restaurante.
- El dueño recibe una copia completa del código.
- La carta, horarios, enlaces y datos de contacto quedan verificados.
- El sitio funciona correctamente en teléfono y escritorio.
