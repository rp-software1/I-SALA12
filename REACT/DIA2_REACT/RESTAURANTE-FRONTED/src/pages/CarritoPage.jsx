import { useState, useEffect } from 'react';
import { platosmock } from '../data1/platos.mock1';

export default function CarritoPage() {
    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setPlatos(platosmock);
            setLoading(false);
        }, 4000);
    }, []);

    function agregarPlato(plato) {
        const existe = carrito.find(item => item.id === plato.id);
        if (existe) {
            setCarrito(carrito.map(item =>
                item.id === plato.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
        } else {
            setCarrito([...carrito, { ...plato, cantidad: 1 }]);
        }
    }

    function quitarPLato(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);


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
                    <span>{item.nombre} x {item.cantidad}</span>
                    <button onClick={() => quitarPLato(item.id)}> Quitar </button>
                </div>
            ))}

            <p>Total: S/ {total}</p>
            <button onClick={() => setCarrito([])}>Limpiar comanda</button>

        </div>
    );
}
