import { useState } from 'react';

import { usePedido } from '../context/PedidoContext';

import { crearPedido } from '../services/api';

export default function CarritoPage() {
    const {
        pedido,
        quitarPlato,
        limpiarPedido,
        cambiarTipo,
    } = usePedido();

    const [enviando, setEnviando] =
        useState(false);

    const [error, setError] = useState(null);

    const [pedidoCreado, setPedidoCreado] =
        useState(null);

    async function handleEnviarComanda() {
        if (pedido.items.length === 0) {
            return;
        }

        setEnviando(true);

        setError(null);

        try {
            const nuevoPedido =
                await crearPedido({
                    mesaId: pedido.mesaId,
                    tipo: pedido.tipo,
                    items: pedido.items,
                });

            setPedidoCreado(nuevoPedido);

            limpiarPedido();
        } catch (err) {
            setError(
                'No se pudo crear el pedido'
            );
        } finally {
            setEnviando(false);
        }
    }

    if (pedidoCreado) {
        return (
            <div className="p-6 text-center">
                <div className="check-icon">
                    ✅
                </div>

                <h2 className="text-2xl font-bold text-green">
                    Comanda enviada
                </h2>

                <p className="text-gray">
                    Pedido #
                    {pedidoCreado._id}
                </p>

                <p className="text-gray">
                    Estado:{' '}
                    {pedidoCreado.estado}
                </p>

                <p className="text-gray">
                    Total: S/{' '}
                    {pedidoCreado.total.toFixed(
                        2
                    )}
                </p>
            </div>
        );
    }

    return (
        <div className="carrito-container">
            <h1 className="text-2xl font-bold mb-6">
                Comanda activa
            </h1>

            <p className="mb-6">
                Tipo: {pedido.tipo} · Estado:{' '}
                {pedido.estado}
            </p>

            <div className="tipo-buttons">
                <button
                    className="btn-tipo"
                    onClick={() =>
                        cambiarTipo('mesa')
                    }
                >
                    Pedido en mesa
                </button>

                <button
                    className="btn-tipo"
                    onClick={() =>
                        cambiarTipo(
                            'para_llevar'
                        )
                    }
                >
                    Para llevar
                </button>
            </div>

            {pedido.items.length === 0 ? (
                <p className="text-gray">
                    No hay items en la
                    comanda
                </p>
            ) : (
                <div>
                    {pedido.items.map(
                        (item) => (
                            <div
                                key={item._id}
                                className="item-carrito"
                            >
                                <span>
                                    {item.nombre} x
                                    {
                                        item.cantidad
                                    }
                                </span>

                                <span>
                                    S/{' '}
                                    {(
                                        item.precioUnitario *
                                        item.cantidad
                                    ).toFixed(
                                        2
                                    )}
                                </span>

                                <button
                                    className="btn-quitar"
                                    onClick={() =>
                                        quitarPlato(
                                            item._id
                                        )
                                    }
                                >
                                    Quitar
                                </button>
                            </div>
                        )
                    )}
                </div>
            )}

            <div className="total-box">
                <span>Total</span>

                <span>
                    S/{' '}
                    {pedido.total.toFixed(2)}
                </span>
            </div>

            {error && (
                <p className="text-red">
                    {error}
                </p>
            )}

            <div className="acciones-carrito">
                <button
                    className="btn-limpiar"
                    onClick={limpiarPedido}
                >
                    Limpiar comanda
                </button>

                <button
                    className="btn-enviar"
                    disabled={
                        enviando ||
                        pedido.items.length === 0
                    }
                    onClick={
                        handleEnviarComanda
                    }
                >
                    {enviando
                        ? 'Enviando comanda...'
                        : 'Enviar comanda'}
                </button>
            </div>
        </div>
    );
}
