# Bloque A
¿El backend tenía el endpoint /mesas/:id?
No, solo existía GET /mesas.
¿Qué implica eso para el rendimiento?
Que se deben descargar todas las mesas y luego buscar la necesaria en el cliente, lo que consume más recursos que consultar directamente una sola mesa por ID.

# Bloque B
¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?
Mi predicción fue correcta. generateMetadata puede ser una función async y obtener datos reales del backend para construir el título dinámico de la página.Tanto generateMetadata como el componente principal realizan una consulta a la misma mesa. Esto implica que podrían realizarse dos búsquedas de datos para la misma información. En proyectos más grandes sería recomendable reutilizar o compartir los resultados para evitar trabajo duplicado y mejorar el rendimiento.

# Bloque C
¿useTransition fue más claro o más confuso que un useState<boolean> de loading?
La verdad que fue un poco más complejo de entender que un useState para loading porque introduce actualizaciones no urgentes. Sin embargo, ayuda a mantener la interfaz responsiva mientras se realizan cambios de estado.

El Suspense manual quedó implementado correctamente, aunque en este caso el skeleton apenas se aprecia porque MesaDetalle no realiza operaciones asíncronas y recibe toda la información mediante props.

# Bloque D
¿revalidatePath fue lo que predijiste? ¿Actualiza en tiempo real o al siguiente request?
Mi predicción fue parcialmente correcta. Pensé que revalidatePath actualizaría inmediatamente todas las vistas, pero en realidad invalida el caché y la actualización se refleja cuando la ruta vuelve a solicitar los datos. El concepto fue más sencillo de entender después de probar el flujo completo entre /mesa/[id] y /mesas.