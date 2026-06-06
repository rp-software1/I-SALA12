-BLOQUE A:

¿El backend tiene GET /pedidos?estado=pendiente para filtrar? Verificarlo con Postman antes de escribir código.
¿GET /pedidos?estado=pendiente funciona? Si
URL exacta de PATCH para cambiar estado: si 

-BLOQUE B:

¿generateMetadata necesita async en /comandas? ¿Necesita hacer fetch para construir el título?
¿Puede ser síncrona? si
¿Por qué? el titulo de comandas es fijo y eso no depende de datos obtenidos desde una API o alguna base de datos, mientas que el generate data no necesita hacer fetch ni ser un asyng, al menos que necesite esperar datos para asi construir de manera dinamicamente en titulo o los metadatos.

