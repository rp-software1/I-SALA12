# Bloque A
¿El backend tenía el endpoint /mesas/:id?
No, solo existía GET /mesas.
¿Qué implica eso para el rendimiento?
Que se deben descargar todas las mesas y luego buscar la necesaria en el cliente, lo que consume más recursos que consultar directamente una sola mesa por ID.