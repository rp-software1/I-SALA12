# BLOQUE B
¿La predicción sobre generateMetadata síncrona fue correcta?
Sí. La predicción fue correcta porque la página de comandas no necesita obtener datos del backend para construir el título. Bastó con usar metadata estática mediante export const metadata, mientras que en DetalleMesa sí fue necesario usar generateMetadata asíncrona porque el título dependía de los datos de una mesa específica.

# BLOQUE C
¿La tabla de flujo de estados fue clara antes de escribir SIGUIENTE?
Sí, la tabla de flujo de estados fue clara antes de escribir "SIGUIENTE". Tener definido el recorrido "pendiente → en_preparacion → lista → entregada" facilitó implementar la lógica del botón y entender en qué momento debía mostrarse o desaparecer. También ayudó a evitar errores al controlar qué estados pueden avanzar y cuáles ya se consideran finales.