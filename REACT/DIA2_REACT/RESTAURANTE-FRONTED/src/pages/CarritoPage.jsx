import { useState } from 'react';
import { platosmock1 } from '../data1/platos.mock';

export default function CarritoPage() {
    const [carrito, setCarrito] = useState([]);

    function agregarPlato(plato) {
        setCarrito([...carrito, plato]);
    }
    function quitarPLato(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h2>Armar Comanda</h2>
            {platosmock1.map((plato) => (
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
                    <span>{item.nombre}
                    </span>
                    <button onClick={() => quitarPLato(item.id)}> Quitar </button>
                </div>
            ))}
        </div>
    );
}