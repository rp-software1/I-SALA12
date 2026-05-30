1. ¿Cuál es la diferencia entre app/layout.tsx y app/page.tsx? Explícalo sin leer el código.

- app/layout.tsx nos ayuda a definir la estructura general de las aplicaciones que se mantienen entre paginas, tales como el menu, el emcabezado o tambien el pie de pagina. El app/page.tsx nos contiene un contenido especifico de una ruta o pagina determinada.

2. Si alguien de otra sala te pregunta "¿para qué sirven los corchetes en [mesaId]?", ¿qué le dirías en 20 segundos?

- en [mesaId], los [] nos estan indicando que es una ruta dimanica en nextjs, esto significa que ya forma parte de una URL puede cambiar y sus valores se guardan en una variable.

3. ¿Por qué NavBar.tsx necesita "use client" pero app/layout.tsx no necesita esa directiva?

- por que esta libreria utiliza funcionalidades que solo funcionan en el navegador como los eventos, los estados o tambien los hooks. En cambio app/layout.tsx se puede renderizar en el servidor por que solo nos define la estructura de nuesta pagina y no necesita del usuario.