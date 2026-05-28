import { useState, useEffect } from 'react';

import { getPlatos } from '../services/api';

import { usePedido } from '../context/PedidoContext';

import PlatoCard1 from '../components1/PlatoCard1';

import type { Plato } from '../types';

export default function MenuPage() {


    const [platos, setPlatos] =
        useState<Plato[]>([]);

    const [loading, setLoading] =
        useState<boolean>(true);

    const [error, setError] =
        useState<string | null>(null);

    const { pedido } = usePedido();

    const totalItems = pedido.items.reduce(
        (acc, i) => acc + i.cantidad,
        0
    );

    useEffect(() => {

        const cargarMenu =
            async (): Promise<void> => {

                try {

                    setLoading(true);

                    await new Promise((resolve) =>
                        setTimeout(resolve, 3000)
                    );

                    const data: Plato[] =
                        await getPlatos();

                    setPlatos(data);

                } catch (err: unknown) {

                    const mensaje =
                        err instanceof Error
                            ? err.message
                            : 'Error al cargar el menú';

                    setError(mensaje);

                } finally {

                    setLoading(false);

                }
            };

        cargarMenu();

    }, []);

    if (loading) {

        return (
            <p>
                Cargando el menú del restaurante...
            </p>
        );
    }

    if (error) {

        return (
            <p>
                Error: {error} — verifica que el backend está corriendo.
            </p>
        );
    }

    return (

        <div>

            <h2>
                Menú del Restaurante
            </h2>

            {totalItems > 0 && (

                <div className="badge-comanda">

                    Comanda: {totalItems} items

                </div>

            )}

            <div className="contenedor-platos">

                {platos.map((plato: Plato) => (

                    <PlatoCard1
                        key={plato._id}
                        plato={plato}
                    />

                ))}

            </div>

        </div>
    );
}