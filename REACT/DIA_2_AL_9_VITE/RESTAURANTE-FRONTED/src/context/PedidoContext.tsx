import React, {
    createContext,
    useContext,
    useState,
} from 'react';

import type {
    Plato,
    TipoPedido,
    EstadoPedidoContext,
    PedidoContextType,
} from '../types';

const initialState: EstadoPedidoContext = {
    mesaId: null,
    tipo: 'para_llevar',
    estado: 'pendiente',
    items: [],
    total: 0,
};

const PedidoContext = createContext<
    PedidoContextType | undefined
>(undefined);

interface PedidoProviderProps {
    children: React.ReactNode;
}

export function PedidoProvider({
    children,
}: PedidoProviderProps) {
    const [pedido, setPedido] =
        useState<EstadoPedidoContext>(
            initialState
        );

    function asignarMesa(
        mesaId: string
    ): void {
        setPedido((prev) => ({
            ...prev,
            mesaId,
            tipo: 'mesa',
        }));
    }

    function agregarPlato(
        plato: Plato
    ): void {
        setPedido((prev) => {
            const existe = prev.items.find(
                (item) =>
                    item.platoId === plato._id
            );

            let nuevosItems;

            if (existe) {
                nuevosItems = prev.items.map(
                    (item) =>
                        item.platoId ===
                            plato._id
                            ? {
                                ...item,
                                cantidad:
                                    item.cantidad +
                                    1,
                            }
                            : item
                );
            } else {
                nuevosItems = [
                    ...prev.items,
                    {
                        platoId: plato._id,
                        nombre: plato.nombre,
                        precioUnitario:
                            plato.precio,
                        cantidad: 1,
                    },
                ];
            }

            const nuevoTotal =
                nuevosItems.reduce(
                    (acc, item) =>
                        acc +
                        item.precioUnitario *
                        item.cantidad,
                    0
                );

            return {
                ...prev,
                items: nuevosItems,
                total: nuevoTotal,
            };
        });
    }

    function quitarPlato(
        platoId: string
    ): void {
        setPedido((prev) => {
            const nuevosItems = prev.items
                .map((item) =>
                    item.platoId === platoId
                        ? {
                            ...item,
                            cantidad:
                                item.cantidad -
                                1,
                        }
                        : item
                )
                .filter(
                    (item) => item.cantidad > 0
                );

            const nuevoTotal =
                nuevosItems.reduce(
                    (acc, item) =>
                        acc +
                        item.precioUnitario *
                        item.cantidad,
                    0
                );

            return {
                ...prev,
                items: nuevosItems,
                total: nuevoTotal,
            };
        });
    }

    function limpiarPedido(): void {
        setPedido(initialState);
    }

    function cambiarTipo(
        nuevoTipo: TipoPedido
    ): void {
        setPedido((prev) => ({
            ...prev,
            tipo: nuevoTipo,
            mesaId:
                nuevoTipo ===
                    'para_llevar'
                    ? null
                    : prev.mesaId,
        }));
    }

    const value: PedidoContextType = {
        pedido,
        asignarMesa,
        agregarPlato,
        quitarPlato,
        limpiarPedido,
        cambiarTipo,
    };

    return (
        <PedidoContext.Provider
            value={value}
        >
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido(): PedidoContextType {
    const context =
        useContext(PedidoContext);

    if (!context) {
        throw new Error(
            'usePedido debe usarse dentro de PedidoProvider'
        );
    }

    return context;
}

export default PedidoContext;