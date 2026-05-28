# Bloque A
• ¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?

TypeScript usa unknown en catch porque cualquier cosa puede lanzarse como error. Eso obliga a verificar el tipo antes de usar propiedades como .message y hace el código más seguro.

# Bloque B
• ¿Omit<Pedido, ...> fue lo que esperabas?
Sí, porque permite reutilizar un tipo grande sin copiarlo completo.
En vez de crear otra interface para el POST, simplemente se excluyen los campos que genera el backend.

¿Cuándo usarías Omit en otros contextos del proyecto?
Sería cuando por ejemplo tengo:
formularios de edición
DTOs para APIs
ocultar campos sensibles
crear versiones “frontend” de modelos del backend
quitar IDs automáticos antes de un POST

# Bloque C
• ¿El comportamiento de useParams te sorprendió? ¿Por qué el genérico no garantiza el tipo?
Sí, porque aunque useParams<{ id: string }>() parece indicar que id siempre será string, React Router sigue devolviendo string | undefined. Esto pasa porque TypeScript no puede garantizar que la URL realmente tenga ese parámetro en tiempo de ejecución. El genérico solo describe la forma esperada del objeto, pero no valida que el valor exista. Por eso es necesario usar un guard como if (!id) antes de utilizarlo.

# Bloque D
• ¿Cuántos errores había al inicio del Día 1? ¿Y ahora? Anota la diferencia en reflexion.md sección D.
Al inicio del Día 1 había varios errores relacionados con TypeScript porque muchos componentes, estados, props y funciones no tenían tipos definidos. También había errores en imports, hooks y archivos .jsx sin tipado. Después de los 3 días de trabajo, todos los errores fueron corregidos y el comando "npx tsc --noEmit" terminó sin errores. La diferencia principal fue que ahora el proyecto tiene tipado más seguro, mejor organización y validación automática de errores antes de ejecutar la aplicación.

¿Qué error fue el más difícil de resolver en los 3 días? ¿Por qué?

Respuesta:
El error más difícil fue el relacionado con los archivos ".jsx" que TypeScript detectaba como módulos sin declaración de tipos, especialmente en App1.tsx y ComandasPage.tsx. Fue complicado porque el problema no estaba en la lógica del componente, sino en cómo TypeScript interpreta los imports y los tipos implícitos "any". También costó entender por qué algunos hooks como "useParams" seguían devolviendo "string | undefined" incluso usando genéricos. Al final se resolvió corrigiendo imports, renombrando archivos y agregando tipado explícito en estados, parámetros y hooks.

# Bloque E
¿Cuál es la diferencia entre TypeScript en React y TypeScript en Next.js? ¿Qué tipos nuevos voy a necesitar aprender cuando empecemos Next.js? Muéstrame un ejemplo de un componente server de Next.js tipado.
Mira por ejemplo en React normalmente TypeScript se usa para tipar props, estados y eventos. En Next.js también se tipan rutas dinámicas, parámetros, componentes server y datos obtenidos desde APIs. Aprendí que en Next.js existen componentes cliente y server, y que un componente server puede ser async directamente.
TypeScript
type Props = {
    params: {
        id: string;
    };
};

export default async function ProductoPage({
    params,
}: Props) {
    return (
        <div>
            <h1>Producto {params.id}</h1>
        </div>
    );
}
Concepto nuevo aprendido:
Aprendí a tipar parámetros dinámicos y componentes server en Next.js usando TypeScript

# Bloque F
¿Qué concepto de TypeScript te resultó más difícil en los 3 días?
Lo más difícil fue entender los tipos genéricos, el manejo de unknown y algunos errores relacionados con imports y módulos tsx.

¿Qué error de los 3 días fue el más útil para aprender? ¿Por qué?
El error más útil fue cuando TypeScript no reconocía archivos jsx y tsx porque ayudó a entender mejor cómo funcionan los imports, las extensiones y los tipos implícitos dentro del proyecto.

¿En qué parte del proyecto React del Día 9 detectarías bugs ahora que antes no veías?
Ahora detectaría bugs en props incorrectas, estados undefined, parámetros de rutas, datos de APIs y errores de tipos que antes pasaban desapercibidos en JavaScript.

Total de errores al inicio del Día 1: 47 → Total de errores hoy: 0

Una cosa que cambiaría de la forma en que escribí JavaScript antes de TypeScript:
Ahora tiparía estados, props y respuestas de APIs desde el inicio para evitar errores y tener el código más ordenado.

# FEEDBACK
¿Qué parte del sprint cambiarías si lo hicieras de nuevo?

Organizaría mejor los tipos y archivos desde el principio para evitar tantos errores acumulados después.

Navigator le pregunta al Driver: ¿qué es lo que más recuerdas de TypeScript después de estos 3 días?

Lo que más recuerdo es cómo TypeScript ayuda a detectar errores antes de ejecutar la aplicación y cómo hace que el proyecto sea mucho más fácil de mantener y entender.