# Bloque A
¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?
Prefijo para variables accesibles en el browser: 
NEXTPUBLIC

Prefijo para variables solo del servidor:
sin prefijo

# Bloque B
MesasPage llama a getMesas() con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con NavBar, o el skeleton de loading.tsx?
El usuario ve durante el fetch: el layout de la página y luego el contenido de loading.tsx mientras se completa el fetch.
¿Quién muestra el loading — MesasPage o loading.tsx? 
loading.tsx.

# Bloque C
¿MenuPage va a necesitar loading.tsx y error.tsx también? Decide antes de empezar si los vas a crear o no, y anota la razón.
¿Crear loading.tsx en /menu? SÍ / NO — razón: Si, ya que MenuPage realiza un fetch al backend para obtener platos
¿Crear error.tsx en /menu? SÍ / NO — razón: Sí porque el fetch puede fallar si el backend está apagado o devuelve un error
