import { useState, useEffect } from 'react';
import { getPlatos } from '../services/api';
import { usePedido } from '../context/PedidoContext';
import PlatoCard1 from '../components1/PlatoCard1';

export default function MenuPage() {
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { pedido } = usePedido();
    const totalItems = pedido.items.reduce((acc, i) => acc + i.cantidad, 0);


    useEffect(() => {
        async function cargarMenu() {
            try {
                setLoading(true);

                await new Promise((resolve) => setTimeout(resolve, 3000));
                const data = await getPlatos();

                setPlatos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        cargarMenu();
    }, []);

    if (loading) {
        return <p>Cargando el menú del restaurante...</p>;
    }

    if (error) {
        return <p>Error: {error} — verifica que el backend está corriendo.</p>;
    }

    return (
        <div>
            <h2>Menú del Restaurante</h2>

            {totalItems > 0 && (
                <div className="badge-comanda">
                    Comanda: {totalItems} items
                </div>
            )}

            <div className="contenedor-platos">
                {platos.map((plato) => (
                    <PlatoCard1 key={plato._id} plato={plato} />
                ))}
            </div>
        </div>
    );
}