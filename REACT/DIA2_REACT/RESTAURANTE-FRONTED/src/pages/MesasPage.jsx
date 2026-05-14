import { mesasMock } from '../data/mesas.mock.js';
import MesaCard from '../components/MesaCard.jsx';
import { Link } from 'react-router-dom';

function MesasPage() {
    return (
        <div>
            <h2>Mesas del Restaurante</h2>

            {mesasMock.map((mesa) => (
                <div key={mesa.id}>
                    <MesaCard
                        numero={mesa.numero}
                        capacidad={mesa.capacidad}
                        estado={mesa.estado}
                        comensales={mesa.comensales}
                    />
                    <Link to={`/mesas/${mesa.id}`}>Ver Detalle</Link>
                </div>
            ))}
        </div>
    );
}

export default MesasPage;

