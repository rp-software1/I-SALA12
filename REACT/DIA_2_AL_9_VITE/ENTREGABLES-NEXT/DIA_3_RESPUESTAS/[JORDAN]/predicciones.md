BLOQUE A._

layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?
¿layout.tsx necesita "use client" para importar PedidoProvider? NO
¿Por qué? En nextjs layout puede seguir siendo un componente del servidor y envolver su contenido con pedidoprovider aun teniendo un use client
