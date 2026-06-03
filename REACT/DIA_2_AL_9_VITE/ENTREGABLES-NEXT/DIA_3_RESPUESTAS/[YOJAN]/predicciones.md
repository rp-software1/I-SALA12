# BLOQUE B
¿Dónde exactamente en PlatoCard.tsx van a agregar la llamada a agregarPlato(plato)? ¿Antes o después del setAgregado(true)?
Línea donde va agregarPlato(plato): 
Antes de setAgregado(true) dentro de handleAgregar().

¿El estado local agregado sigue sirviendo? 
Sí. Sigue sirviendo para mostrar el feedback visual temporal de que el plato fue agregado correctamente.

# Bloque C
¿CarritoPage puede exportar metadata de Next.js? ¿Por qué?
¿metadata funciona en Client Components? 
No
Si no funciona, ¿cómo se cambia el title de la pestaña en una página Client? 
Se puede usar document.title, next/head o dejar que el título definido en el layout se mantenga para toda la aplicación
