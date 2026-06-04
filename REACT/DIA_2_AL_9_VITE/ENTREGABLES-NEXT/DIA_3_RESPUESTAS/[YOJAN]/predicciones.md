# BLOQUE B
¿Dónde exactamente en PlatoCard.tsx van a agregar la llamada a agregarPlato(plato)? ¿Antes o después del setAgregado(true)?
Línea donde va agregarPlato(plato): 
Antes de setAgregado(true) dentro de handleAgregar().

¿El estado local agregado sigue sirviendo? 
Sí. Sigue sirviendo para mostrar el feedback visual temporal de que el plato fue agregado correctamente.

# BLOQUE C
¿CarritoPage puede exportar metadata de Next.js? ¿Por qué?
¿metadata funciona en Client Components? 
No
Si no funciona, ¿cómo se cambia el title de la pestaña en una página Client? 
Se puede usar document.title, next/head o dejar que el título definido en el layout se mantenga para toda la aplicación

# BLOQUE D
El Server Action recibe los datos del pedido como parámetro. ¿Qué tipo TypeScript le pondrías a ese parámetro?
EstadoPedidoContext, porque eso es exactamente lo que guarda el Context.

Tipo del parámetro de enviarComanda: 
¿El Server Action puede usar useState? 
No, useState es un hook de React para Client Components. Los Server Actions corren en el servidor y no pueden usar hooks de React.
