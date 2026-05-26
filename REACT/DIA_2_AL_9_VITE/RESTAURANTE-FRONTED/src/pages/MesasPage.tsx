import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MesaCard from '../components1/MesaCard.jsx';

import { getMesas } from '../services/api';
import { usePedido } from '../context/PedidoContext';

function MesasPage() {
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { asignarMesa } = usePedido();

    const navigate = useNavigate();

    useEffect(() => {
        getMesas()
            .then((data) => {
                setMesas(data);
            })
            .catch(() => {
                setError(
                    'No se pudieron cargar las mesas'
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    function handleSeleccionarMesa(mesa) {
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
                {mesas.map((mesa) => (
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

                        {mesa.estado === 'libre' && (
                            <button
                                className="btn-seleccionar"
                                onClick={() =>
                                    handleSeleccionarMesa(
                                        mesa
                                    )
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