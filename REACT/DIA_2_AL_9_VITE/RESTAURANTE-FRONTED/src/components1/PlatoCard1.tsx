import { usePedido } from '../context/PedidoContext';
import type { Plato } from '../types';

interface PlatoCardProps {
    plato: Plato;
}

function PlatoCard1({ plato }: PlatoCardProps) {
    const { agregarPlato } = usePedido();

    return (
        <div className="plato-card">
            <h3>{plato.nombre}</h3>

            <p>Categoría: {plato.categoria}</p>

            <p>Precio: S/ {plato.precio}</p>

            <p className={plato.disponible ? 'disponible' : 'agotado'}>
                {plato.disponible
                    ? '✅ Disponible'
                    : '❌ Agotado'}
            </p>

            <button
                onClick={() => agregarPlato(plato)}
                disabled={!plato.disponible}
            >
                Agregar a comanda
            </button>
        </div>
    );
}

export default PlatoCard1;