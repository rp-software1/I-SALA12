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

## Exploración de estructura

### layout.tsx
Sirve como layout global.
Envuelve todas las páginas usando {children}.
Aquí normalmente van navbar, footer y estilos globales.

### page.tsx
Representa una ruta.
El page.tsx principal corresponde a "/".

### globals.css
Aplica estilos globales a toda la aplicación.

### public/
Aquí van imágenes, íconos y archivos estáticos.

### tsconfig.json
Configura TypeScript para Next.js.

### next.config.ts
Sirve para configuraciones especiales de Next.js.