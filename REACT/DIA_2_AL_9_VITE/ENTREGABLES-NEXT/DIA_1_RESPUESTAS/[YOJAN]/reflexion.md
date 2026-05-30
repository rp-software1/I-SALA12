# Bloque A
• ¿La estructura del proyecto fue lo que predijiste? ¿Qué archivo te sorprendió más?
Fue diferente a React porque no existe App.tsx ni React Router pero lo que más me sorprendió fue layout.tsx porque envuelve automáticamente todas las páginas.

# Bloque B
• ¿Por qué 'use client' es necesario en NavBar pero no en layout.tsx?
Es porque NavBar utiliza usePathname(), que es un hook que necesita ejecutarse en el navegador para conocer la ruta actual. Por eso debe declararse como Client Component usando 'use client'.

En cambio, layout.tsx no utiliza hooks del navegador ni interacción del usuario. Su función es envolver las páginas y mostrar elementos comunes, por lo que puede ejecutarse como Server Component.

¿Qué diferencia hay?
En que NavBar necesita acceso al navegador y a la ruta actual para resaltar el enlace activo. Layout.tsx solo organiza la estructura general de la aplicación y renderiza los componentes hijos.