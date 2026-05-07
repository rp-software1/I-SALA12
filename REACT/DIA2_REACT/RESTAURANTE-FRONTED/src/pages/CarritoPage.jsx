import { useState, useEffect } from 'react';
import { platosmock } from '../data/platos.mock';

export default function CarritoPage() {
    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setPlatos(platosmock);
            setLoading(false);
        }, 800);
    }, []);

    function agregarPlato(plato) {
        setCarrito([...carrito, plato]);
    }
    function quitarPLato(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }
    if (loading)
        return <p>Cargando menú...</p>;

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platosmock.map((plato) => (
                <div key={plato.id}>
                    <span>
                        {plato.nombre} — S/ {plato.precio}
                    </span>
                    <button onClick={() => agregarPlato(plato)}> Agregar </button>
                </div>
            ))}
            <h3>Comanda ({carrito.length} ítems)</h3>
            {carrito.map((item, index) => (
                <div key={index}>
                    <span>{item.nombre}</span>
                    <button onClick={() => quitarPLato(item.id)}> Quitar </button>
                </div>
            ))}
        </div>
    );
}
