import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Mesa } from '../types';

import MesaCard from '../components1/MesaCard';

import { getMesas } from '../services/api';
import { usePedido } from '../context/PedidoContext';

function MesasPage() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { asignarMesa } = usePedido();

    const navigate = useNavigate();

    useEffect(() => {
        const cargarMesas = async (): Promise<void> => {
            try {
                const data: Mesa[] = await getMesas();

                setMesas(data);

            } catch (err: unknown) {

                const mensaje =
                    err instanceof Error
                        ? err.message
                        : 'No se pudieron cargar las mesas';

                setError(mensaje);

            } finally {

                setLoading(false);

            }
        };

        cargarMesas();

    }, []);

    function handleSeleccionarMesa(
        mesa: Mesa
    ): void {

        asignarMesa(mesa._id);

        navigate('/carrito');
    }

    if (loading) {
        return (
            <p className="p-6 text-gray">
                Cargando mesas...
            </p>
        );
    }

    if (error) {
        return (
            <p className="p-6 text-red">
                {error}
            </p>
        );
    }

    return (
        <div className="p-6">

            <h2 className="text-2xl font-bold mb-6">
                Mesas del Restaurante
            </h2>

            <div className="grid-mesas">

                {mesas.map((mesa: Mesa) => (

                    <div
                        key={mesa._id}
                        className={`mesa-card estado-card-${mesa.estado}`}
                    >

                        <MesaCard
                            mesa={mesa}
                            onClick={handleSeleccionarMesa}
                        />

                        <p>
                            Estado:{' '}
                            <span
                                className={`estado-${mesa.estado}`}
                            >
                                {mesa.estado}
                            </span>
                        </p>

                        {mesa.estado === 'disponible' && (

                            <button
                                className="btn-seleccionar"
                                onClick={() =>
                                    handleSeleccionarMesa(mesa)
                                }
                            >
                                Seleccionar mesa
                            </button>

                        )}

                    </div>

                ))}

            </div>

        </div>
    );
}

export default MesasPage;