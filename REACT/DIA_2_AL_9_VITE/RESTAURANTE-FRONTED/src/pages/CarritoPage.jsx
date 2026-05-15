import { usePedido } from '../context/PedidoContext';

export default function CarritoPage() {
    const {
        pedido,
        quitarPlato,
        limpiarPedido,
        cambiarTipo,
    } = usePedido();

    return (
        <div>
            <h1>Comanda activa</h1>

            <p>
                Tipo: {pedido.tipo} · Estado: {pedido.estado}
            </p>

            <button onClick={() => cambiarTipo('mesa')}>
                Pedido en mesa
            </button>

            <button onClick={() => cambiarTipo('para_llevar')}>
                Para llevar
            </button>

            {pedido.items.length === 0 ? (
                <p>No hay items en la comanda</p>
            ) : (
                <div>
                    {pedido.items.map((item) => (
                        <div key={item._id}>
                            <span>
                                {item.nombre} x{item.cantidad}
                            </span>

                            <span>
                                {' '}
                                - S/ {(item.precioUnitario * item.cantidad).toFixed(2)}
                            </span>

                            <button
                                onClick={() => quitarPlato(item._id)}
                            >
                                Quitar
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <p>Total: S/ {pedido.total.toFixed(2)}</p>

            <button onClick={limpiarPedido}>
                Limpiar comanda
            </button>
        </div>
    );
}
