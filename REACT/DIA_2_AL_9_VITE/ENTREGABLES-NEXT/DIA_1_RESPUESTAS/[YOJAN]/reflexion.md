# Bloque A
• ¿La estructura del proyecto fue lo que predijiste? ¿Qué archivo te sorprendió más?
Fue diferente a React porque no existe App.tsx ni React Router pero lo que más me sorprendió fue layout.tsx porque envuelve automáticamente todas las páginas.

# Bloque B
• ¿Por qué 'use client' es necesario en NavBar pero no en layout.tsx?
Es porque NavBar utiliza usePathname(), que es un hook que necesita ejecutarse en el navegador para conocer la ruta actual. Por eso debe declararse como Client Component usando 'use client'.

En cambio, layout.tsx no utiliza hooks del navegador ni interacción del usuario. Su función es envolver las páginas y mostrar elementos comunes, por lo que puede ejecutarse como Server Component.

¿Qué diferencia hay?
En que NavBar necesita acceso al navegador y a la ruta actual para resaltar el enlace activo. Layout.tsx solo organiza la estructura general de la aplicación y renderiza los componentes hijos.

# Bloque C
• La tabla React Router → App Router: ¿fue el momento donde el App Router "hizo clic"? ¿Qué parte fue la más reveladora?
El momento donde App Router me hizo clic fue cuando vi que crear una carpeta con un page.tsx ya generaba una ruta automáticamente. Viniendo de React Router me sorprendió no tener que registrar rutas en un archivo central. La estructura de carpetas se siente más simple y fácil de seguir.

# Bloque D
• ¿params como prop fue lo que predijiste o esperabas un hook como en React? ¿Qué implica esa diferencia?
Esperaba un hook como useParams() porque es lo que usaba en React. En Next.js los parámetros llegan como props, lo que permite que la página funcione como Server Component. La principal diferencia es que no depende directamente del navegador para obtener los datos de la URL.

# Bloque E
• ¿El archivo not-found.tsx fue el que esperabas, o esperabas un nombre diferente?
Al principio pensé que Next.js usaría un archivo llamado 404.tsx, parecido a otros frameworks. Me sorprendió que use la convención not-found.tsx para detectar automáticamente las rutas inexistentes.
También comprobé que TypeScript seguía funcionando sin errores después de crear las nuevas rutas.