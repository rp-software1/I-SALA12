import { useState, useEffect } from 'react';
import { getPlatos } from '../services/api';

export default function CarritoPage() {
    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function cargarPlatos() {
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

        cargarPlatos();
    }, []);

    function agregarPlato(plato) {
        const existe = carrito.find((item) => item._id === plato._id);
        if (existe) {
            setCarrito(
                carrito.map((item) =>
                    item._id === plato._id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
            );
        } else {
            setCarrito([...carrito, { ...plato, cantidad: 1 }]);
        }
    }

    function quitarPLato(id) {
        setCarrito(carrito.filter((item) => item._id !== id));
    }

    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );

    if (loading) return <p>Cargando menú...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platos.map((plato) => (
                <div key={plato._id}>
                    <span>
                        {plato.nombre} — S/ {plato.precio}
                    </span>
                    <button onClick={() => agregarPlato(plato)}> Agregar </button>
                </div>
            ))}
            <h3>Comanda ({carrito.length} ítems)</h3>
            {carrito.map((item, index) => (
                <div key={index}>
                    <span>
                        {item.nombre} x{item.cantidad}
                    </span>
                    <button onClick={() => quitarPLato(item._id)}> Quitar </button>
                </div>
            ))}

            <p>Total: S/ {total}</p>
            <button onClick={() => setCarrito([])}>Limpiar comanda</button>
        </div>
    );
}
