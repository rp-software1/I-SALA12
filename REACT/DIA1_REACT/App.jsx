import { platosMock } from "./data/platos.mock.js";
import { PlatoCard } from "./components/PlatoCard.jsx";

export function App() {
    return (
        <div>
            <h1>Carta de restaurantes</h1>

            {platosMock.map(plato => (
                <PlatoCard
                    key={plato.id}
                    nombre={plato.nombre}
                    categoria={plato.categoria}
                    precio={plato.precio}
                    stock={plato.stock}
                    disponible={plato.disponible}
                />
            ))}
        </div>
    );
}