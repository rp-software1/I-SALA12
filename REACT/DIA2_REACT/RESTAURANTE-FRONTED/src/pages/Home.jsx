import PLatoCard1 from '../components1/PlatoCard1';
import { platosmock1 } from '../data1/platos.mock1';
function Home() {
    return (
        <div>
            <h1>Carta del Restaurante</h1>
            {platosmock1.map((plato) => (
                <PLatoCard1
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

export default Home;
