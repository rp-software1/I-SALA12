# BLOQUE A
¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?
La predicción fue correcta. CarritoPage no puede exportar metadata porque es un Cliente Component ya que para cambiar el título fue necesario usar useEffect y document.title. Esto funciona para la experiencia dle usuario pero no aporta al SEO porque los motores de búsqueda no dependen de JavaScript para leer la metadata inicial.

# BLOQUE C
¿Encontraron algo inesperado en la auditoría?
No encontramos problemas graves. Lo único que apareció fue un comentario relacionado con un TODO antiguo que ya había sido resuelto y algunos comentarios de referencia que ya no eran necesarios.

¿Qué fue lo más común?
Lo más común fueron comentarios que quedaron después de completar tareas anteriores. No encontramos console.log de depuración ni imports sin usar, por lo que el proyecto ya estaba bastante limpio.

# BLOQUE E
¿Cuántos errores TypeScript quedaban antes de este bloque?
Antes de este bloque quedaban 0 errores de TypeScript.

La verificación final se realizó en ambos proyectos utilizando "npx tsc --noEmit" y no se encontraron errores. También se actualizó el README con las instrucciones de instalación, variables de entorno y rutas principales del sistema.

# BLOQUE F
Las preguntas de evaluación se respondieron sin necesidad de consultar el código. El proyecto quedó listo para pasar al proceso de despliegue en Vercel. La parte más importante fue comprender la diferencia entre metadata en Server Components y Client Components, así como el flujo de build y configuración de producción.