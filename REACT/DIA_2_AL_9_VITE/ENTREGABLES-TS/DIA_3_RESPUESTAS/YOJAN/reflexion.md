# Bloque A
 ¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?

TypeScript usa unknown en catch porque cualquier cosa puede lanzarse como error. Eso obliga a verificar el tipo antes de usar propiedades como .message y hace el código más seguro.

