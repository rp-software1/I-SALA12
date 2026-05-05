import { useState } from 'react';
import OrderForm from '../components/OrderForm';
import { mesasMock } from '../data1/mesas.mock';

function ComandasPage() {
    const [mesaSeleccionada, setMesaSeleccionada] = useState(1);
    return (
        <div>
            <h2>Tomar Comanda</h2>
            <label>Selecciona una mesa: </label>
            <select
                value={mesaSeleccionada}
                onChange={(e) => setMesaSeleccionada(Number(e.target.value))}
            >
                {mesasMock.map((mesa) => (
                    <option key={mesa.id} value={mesa.numero}>
                        Mesa {mesa.numero}
                    </option>
                ))}
            </select>
            <OrderForm mesaNumero={mesaSeleccionada} />
        </div>
    );
}

export default ComandasPage;
