# Bloque A
¿El backend tenía el endpoint /mesas/:id?
No, solo existía GET /mesas.
¿Qué implica eso para el rendimiento?
Que se deben descargar todas las mesas y luego buscar la necesaria en el cliente, lo que consume más recursos que consultar directamente una sola mesa por ID.

# Bloque B
• ¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?
Mi predicción fue correcta. generateMetadata puede ser una función async y obtener datos reales del backend para construir el título dinámico de la página.Tanto generateMetadata como el componente principal realizan una consulta a la misma mesa. Esto implica que podrían realizarse dos búsquedas de datos para la misma información. En proyectos más grandes sería recomendable reutilizar o compartir los resultados para evitar trabajo duplicado y mejorar el rendimiento.