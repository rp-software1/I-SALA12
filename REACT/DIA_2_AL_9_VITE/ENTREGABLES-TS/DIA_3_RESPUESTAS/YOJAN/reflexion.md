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