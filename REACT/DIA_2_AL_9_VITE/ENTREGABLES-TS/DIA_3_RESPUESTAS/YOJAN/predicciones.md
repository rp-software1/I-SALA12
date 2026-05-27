# Bloque A
¿Cuántas interfaces/types duplicados hay en total en api.ts, PlatoCard.tsx y MesaCard.tsx que vas a eliminar en este bloque?
Cantidad de declaraciones duplicadas que vas a eliminar: 5

Tipos que se van a eliminar de api.ts: 
Mesa
Pedido
EstadoPedido

# Bloque B
CarritoPage usa pedido del Context para construir el body del POST. ¿Cuántos campos tiene ese objeto? Lista los que deben ir en el body según la interface Pedido.
Campos que van en el body: 
- mesaId
- tipo
- estado
- items
- total

Campos que NO van (los excluye Omit):
- _id
- creadoEn
- actualizadoEn
