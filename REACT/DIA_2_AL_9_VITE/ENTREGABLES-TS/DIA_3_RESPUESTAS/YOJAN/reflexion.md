# Bloque A
¿Tiene sentido tener un único archivo de tipos? ¿Qué ventaja concreta ves frente a declarar los tipos en cada componente?
Si, TypeScript usa unknown en catch porque cualquier cosa puede lanzarse como error. Eso obliga a verificar el tipo antes de usar propiedades como .message y hace el código más seguro.