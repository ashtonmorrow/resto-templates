# Voz instructiva de Folio

Folio enseña a personas con experiencia en diseño o en un negocio a construir,
revisar y publicar proyectos con IA. La persona puede no conocer todavía Git,
componentes ni comandos. Eso no la convierte en una principiante en todo lo
demás.

Esta guía manda sobre la prosa de `src/data/guides.ts`, las páginas de ayuda y
las instrucciones para copiar proyectos. La información real del negocio y la
documentación oficial de cada herramienta mandan sobre esta guía.

## A quién le hablamos

- Diseñadores que trabajan con Figma, Adobe, Sketch, Canva, PDF, capturas o
  bocetos.
- Dueños de negocios que conocen su operación pero no necesariamente el código.
- Personas de Argentina y América Latina. Usá español claro y voseo natural.
- Lectores que quieren hacer algo concreto, no estudiar informática antes de
  empezar.

No reduzcas a la persona a “no técnica”. Nombrá la experiencia que ya trae y
explicá solamente la parte nueva.

## Registro

- Escribí como alguien que acompaña una primera práctica real.
- Empezá por el resultado visible y después explicá la pieza técnica.
- Usá frases directas. Una instrucción debe indicar qué tocar, qué conservar y
  cómo comprobar el resultado.
- Usá solamente el signo de cierre en preguntas y exclamaciones. Mike escribe
  `?` y `!`, nunca `¿` ni `¡`.
- Preferí un archivo, componente, botón o captura real antes que una analogía.
- Usá Folio como demostración abierta. No lo presentes como caso de estudio.
- Nombrá a Figma o Adobe como ejemplos, no como requisitos del método.
- Escribí títulos que describan el contenido. Evitá encadenar frases cortas para
  producir una cadencia de campaña o manifiesto.
- No conviertas cada bloque en una gran declaración. Alterná títulos breves,
  explicación tranquila y ejemplos concretos.

## Cómo explicar código

Definí un término la primera vez que sea necesario. La definición debe explicar
qué permite hacer o revisar.

- **Repositorio:** la carpeta completa del proyecto junto con su historial.
- **Componente:** una pieza reutilizable de la interfaz con una función clara.
- **Token:** un nombre compartido para una decisión visual, como un color o una
  medida de espacio.
- **Vista previa:** una versión local o temporal que se puede abrir antes de
  publicar.
- **Build:** la comprobación que intenta generar la versión publicable.
- **Diff:** la comparación exacta entre la versión anterior y el cambio.
- **Commit:** un punto identificado del historial al que se puede volver.
- **Harness o entorno de trabajo:** los archivos, instrucciones, herramientas y
  controles que permiten al agente actuar y comprobarse.

No acumules vocabulario en un glosario separado antes de usarlo. Explicá el
término junto a la acción donde importa y dejá una referencia breve para volver.

## Qué decir sobre la IA

- Distinguí entre conversar con un modelo y darle a un agente acceso autorizado
  a los archivos de un proyecto.
- Decí qué puede inspeccionar, modificar o ejecutar en ese entorno concreto.
- No afirmes que la IA entiende la intención, recuerda todo o garantiza un
  resultado correcto.
- No presentes el prompt como la habilidad principal. El contexto, la estructura
  del proyecto y la revisión importan tanto como el pedido.
- Pedí datos verificables. Marcá los huecos como pendientes en vez de permitir
  que el agente los complete.
- Una cuenta, un costo, una credencial, un dominio o una publicación requieren
  una decisión explícita de la persona.
- Cuando una interfaz, función o disponibilidad pueda cambiar, enlazá la
  documentación oficial y fechá la revisión si la precisión depende del momento.

## Secuencia de una lección

1. Mostrá qué resultado se va a obtener.
2. Explicá por qué esa pieza existe.
3. Indicá un cambio chico y delimitado.
4. Pedí una vista previa o un resultado observable.
5. Revisá el diff, los datos y el funcionamiento.
6. Conservá un punto al que volver.
7. Recién entonces avanzá al siguiente cambio o a la publicación.

Cada pedido listo para copiar debe incluir el alcance, lo que se conserva, la
comprobación final y la obligación de señalar cualquier supuesto.

## Hábitos que no pertenecen a Folio

- Prometer resultados “mágicos”, “increíbles” o “sin esfuerzo”.
- Decir que alguien puede construir sin aprender ni revisar nada.
- Usar “simplemente pedile a la IA” para ocultar decisiones.
- Convertir la guía en una lista de prompts sin explicar el proyecto.
- Presentar velocidad como sustituto de criterio.
- Usar jerga inglesa cuando existe una explicación corta en español.
- Tratar una compilación correcta como prueba visual o funcional.
- Publicar automáticamente como cierre normal de un ejercicio.
- Inventar una anécdota, reacción o resultado para dar personalidad al texto.
- Acumular imperativos, contrastes simétricos o frases de tres golpes para que
  el texto parezca más rotundo.

## Pasada anti-IA

Una frase puede cumplir todas las reglas anteriores y seguir sonando fabricada.
Antes de publicar, buscá estas señales:

- Títulos que podrían servir para cualquier producto: “aprendé haciendo”,
  “hacelo realidad” o “llevá tu idea al siguiente nivel”.
- Dos frases enfrentadas sólo para sonar categóricas: “no es X. Es Y.”
- Tres imperativos cortos seguidos como eslogan.
- Párrafos que anuncian una idea y después la repiten con otras palabras.
- Verbos promocionales donde debería haber una acción: acompañar, potenciar,
  transformar o revolucionar.
- Sustantivos abstractos sin archivo, control o resultado visible cerca.
- Una metáfora sostenida en los títulos aunque ya no ayude a entender el paso.

La corrección no consiste en volver el texto más informal. Reemplazá la frase
genérica por el objeto y la acción reales: qué archivo abrir, qué dato cargar,
qué botón tocar o qué resultado comprobar.

## Comprobación humana

El linter detecta algunas señales mecánicas. Después de ejecutarlo, leé la guía
completa y confirmá:

- Una diseñadora puede decir qué va a producir antes de empezar?
- Cada término nuevo queda conectado con algo visible?
- Los pasos usan archivos y controles que existen en el repositorio?
- La herramienta de diseño es una entrada posible y no una condición?
- Cada cambio tiene una forma concreta de comprobarse?
- La persona conserva control sobre datos, cuentas, costos y publicación?
- La guía separa un build exitoso de una revisión visual y funcional?
- Las afirmaciones sobre productos enlazan documentación oficial vigente?
- El texto enseña una práctica que se puede repetir en otro proyecto?
