import { mesasMock } from '../data1/mesas.mock.js';
import MesaCard from '../components1/MesaCard.jsx';

function MesasPage() {
    return (
        <div>
            <h2>Mesas del Restaurante</h2>

            {mesasMock.map((mesa) => (
                <MesaCard
                    key={mesa.id}
                    numero={mesa.numero}
                    capacidad={mesa.capacidad}
                    estado={mesa.estado}
                    comensales={mesa.comensales}
                />
            ))}
        </div>
    );
}

export default MesasPage;

