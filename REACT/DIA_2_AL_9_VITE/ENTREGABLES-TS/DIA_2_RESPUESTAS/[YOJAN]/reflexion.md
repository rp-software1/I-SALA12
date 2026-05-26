# Bloque B:
. ¿Qué pasa con el autocompletado en el IDE ahora que los tipos están en un solo lugar?
Pues que ahora el autocompletado funciona mejor porque todos los componentes usan los mismos tipos desde types/index.ts. Cuando se escribe una propiedad de Mesa o Plato, Antigravity muestra las opciones correctas automáticamente y evita repetir interfaces en varios archivos.

# Bloque C:
. PedidoContext actualmente tiene 5 funciones: agregarPlato, quitarPlato, cambiarTipo, asignarMesa y limpiarPedido. ¿Cuál es el tipo exacto de cada parámetro según los modelos en types/index.ts?
agregarPlato recibe: un objeto de tipo Plato

quitarPlato recibe: un string con el id del plato

cambiarTipo recibe: un tipoPedido

asignarMesa recibe: un string con el id de la mesa

limpiarPedido recibe: no recibe parámetros

