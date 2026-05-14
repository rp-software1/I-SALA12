import { usePedido } from '../context/PedidoContext';

export default function CarritoPage() {
    const { pedido } = usePedido();

    return (
        <div>
            <h1>Comanda activa</h1>
            <p>
                Tipo: {pedido.tipo} · Estado: {pedido.estado}
            </p>
            {pedido.items.length === 0 ? (
                <p>No hay items en la comanda</p>
            ) : (
                <div>
                    {pedido.items.map((item, index) => (
                        <div key={index}>
                            <span>
                                {item.nombre} x{item.cantidad}
                            </span>
                            <span>
                                {''} - S/ {(item.precioUnitario * item.cantidad).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>
            )}
            <p>Total: S/ {pedido.total.toFixed(2)}</p>
        </div>
    );
}
