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
