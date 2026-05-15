import { createContext, useContext, useState } from 'react';

const PedidoContext = createContext(null);

const estadoInicial = {
    mesaId: null,
    tipo: 'mesa',
    estado: 'pendiente',
    items: [],
    total: 0,
};

export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState(estadoInicial);

    function agregarPlato(plato) {
        setPedido((prev) => {
            const existe = prev.items.find(
                (item) => item._id === plato._id
            );

            let nuevosItems;

            if (existe) {
                nuevosItems = prev.items.map((item) =>
                    item._id === plato._id
                        ? {
                            ...item,
                            cantidad: item.cantidad + 1,
                        }
                        : item
                );
            } else {
                nuevosItems = [
                    ...prev.items,
                    {
                        _id: plato._id,
                        nombre: plato.nombre,
                        precioUnitario: plato.precio,
                        cantidad: 1,
                    },
                ];
            }

            const nuevoTotal = nuevosItems.reduce(
                (acc, item) =>
                    acc + item.precioUnitario * item.cantidad,
                0
            );

            return {
                ...prev,
                items: nuevosItems,
                total: nuevoTotal,
            };
        });
    }

    function quitarPlato(platoId) {
        setPedido((prev) => {
            const nuevosItems = prev.items
                .map((item) =>
                    item._id === platoId
                        ? {
                            ...item,
                            cantidad: item.cantidad - 1,
                        }
                        : item
                )
                .filter((item) => item.cantidad > 0);

            const nuevoTotal = nuevosItems.reduce(
                (acc, item) =>
                    acc + item.precioUnitario * item.cantidad,
                0
            );

            return {
                ...prev,
                items: nuevosItems,
                total: nuevoTotal,
            };
        });
    }

    function limpiarPedido() {
        setPedido({
            ...estadoInicial,
        });
    }

    function cambiarTipo(nuevoTipo) {
        setPedido((prev) => ({
            ...prev,
            tipo: nuevoTipo,
        }));
    }

    return (
        <PedidoContext.Provider
            value={{
                pedido,
                agregarPlato,
                quitarPlato,
                limpiarPedido,
                cambiarTipo,
            }}
        >
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const context = useContext(PedidoContext);

    if (!context) {
        throw new Error(
            'usePedido debe usarse dentro de PedidoProvider'
        );
    }

    return context;
}
