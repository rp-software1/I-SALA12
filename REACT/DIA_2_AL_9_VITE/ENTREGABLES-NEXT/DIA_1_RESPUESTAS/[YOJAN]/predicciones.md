# Bloque A

Carpetas que esperaba ver:
- app
- public
- node_modules

Archivos:
- package.json
- tsconfig.json
- next.config.ts

¿Existe un archivo de rutas tipo App.tsx?
No. Next.js usa App Router basado en carpetas.

---

Exploración de estructura:

- layout.tsx
Sirve como layout global.
Envuelve todas las páginas usando {children}.
Aquí normalmente van navbar, footer y estilos globales.

- page.tsx
Representa una ruta.
El page.tsx principal corresponde a "/".

- globals.css
Aplica estilos globales a toda la aplicación.

- public/
Aquí van imágenes, íconos y archivos estáticos.

- tsconfig.json
Configura TypeScript para Next.js.

- next.config.ts
Sirve para configuraciones especiales de Next.js.

# Bloque B
El NavBar de React Día 1 usaba NavLink con activeClassName o className con función. ¿Eso va a funcionar en Next.js sin cambios, o necesita adaptación?
¿NavLink funciona en Next.js? 
No directamente, porque Next.js no usa react-router-dom.

¿Qué import cambia? 
NavLink se reemplaza por Link de next/link y usePathname de next/navigation para detectar la ruta activa.

# Bloque C
¿Cuántas carpetas van a crear en este bloque? Lista los nombres de las carpetas antes de ejecutar el primer mkdir.
Carpetas a crear: 
- app/mesas
- app/menu
- app/carrito

Archivos page.tsx a crear: 
- app/mesas/page.tsx
- app/menu/page.tsx
- app/carrito/page.tsx

# Bloque D
¿Cómo llega el parámetro mesaId al componente page.tsx? ¿Como prop, como hook, o de otra forma?
¿Cómo llega mesaId al componente?
Llega mediante la propiedad params que recibe page.tsx.

¿Es string o number?
Es string porque Next.js entrega los parámetros de la URL como texto.