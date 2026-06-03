# BLOQUE B
¿El TODO era más simple de conectar de lo que esperabas, o fue complicado?
Conectar el TODO de PlatoCard al PedidoContext fue más simple de lo que esperaba. La mayor parte del trabajo ya estaba hecha gracias al PedidoProvider, por lo que solo fue necesario importar el hook usePedido() y llamar a agregarPlato(plato) dentro de handleAgregar(). También fue interesante ver cómo el NavBar se actualiza automáticamente al leer el mismo Context, sin necesidad de pasar props entre componentes.

# BLOQUE C
¿La predicción sobre metadata fue correcta? ¿Qué implica esa limitación para el diseño de la app?
Sí, Metadata no funciona en Client Components porque se procesa en el servidor antes de que la página llegue al navegador. Como CarritoPage necesita usar el Context mediante hooks, tuvo que convertirse en un Client Component y por eso no puede exportar metadata directamente. Esta limitación obliga a decidir qué páginas deben ser Server Components y cuáles necesitan ejecutarse en el cliente según la funcionalidad que requieran.