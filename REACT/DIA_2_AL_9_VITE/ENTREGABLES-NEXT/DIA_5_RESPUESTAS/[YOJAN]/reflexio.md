# BLOQUE B
¿La predicción sobre generateMetadata síncrona fue correcta?
Sí. La predicción fue correcta porque la página de comandas no necesita obtener datos del backend para construir el título. Bastó con usar metadata estática mediante export const metadata, mientras que en DetalleMesa sí fue necesario usar generateMetadata asíncrona porque el título dependía de los datos de una mesa específica.