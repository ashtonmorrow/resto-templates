# Instrucciones para asistentes

Este repositorio es una base Astro estática para sitios de restaurantes. Ayudá a una persona no técnica a adaptarlo sin cambiar la arquitectura innecesariamente.

## Antes de editar

1. Preguntá cuál de las quince plantillas quiere usar.
2. Pedí únicamente los datos que falten: nombre, descripción, dirección, coordenadas, horarios, WhatsApp, Instagram, reservas, carta, precios, moneda, colores y fotos.
3. Explicá cualquier decisión que afecte dominio, cuentas, pagos o publicación.

## Reglas del proyecto

- Mantené los datos comunes en `src/data/restaurant.ts`.
- Reutilizá los componentes de `src/components/blocks/`.
- Preferí cambiar tokens en `src/styles/tokens.css` antes que duplicar estilos.
- No agregues base de datos, autenticación, panel administrativo ni servicios pagos salvo que exista una necesidad concreta y el dueño lo acepte.
- No incrustes secretos ni credenciales en el repositorio.
- Conservá HTML semántico, foco visible, contraste suficiente y botones cómodos en pantallas táctiles.
- Ejecutá `npm run build` antes de dar el trabajo por terminado.

## Entrega esperada

- El dominio y la cuenta de publicación pertenecen al restaurante.
- El dueño recibe una copia completa del código.
- La carta, horarios, enlaces y datos de contacto quedan verificados.
- El sitio funciona correctamente en teléfono y escritorio.
