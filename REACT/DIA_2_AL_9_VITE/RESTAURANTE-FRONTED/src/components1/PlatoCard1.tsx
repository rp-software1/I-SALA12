import type { Plato } from '../types';

interface PlatoCardProps {
    plato: Plato;
    onAgregar: (plato: Plato) => void;
}

function PlatoCard1({
    plato,
    onAgregar,
}: PlatoCardProps) {
    return (
        <div className='plato-card'>
            <h3>{plato.nombre}</h3>

            <p>{plato.descripcion}</p>
            <p>Categoria: {plato.categoria}</p>
            <p>Precio: S/ {plato.precio}</p>

            <p
                className={
                    plato.disponible
                        ? 'disponible'
                        : 'agotado'
                }
            >
                {plato.disponible
                    ? '✅ Disponible'
                    : '❌ Agotado'}
            </p>

            <button
                onClick={() => onAgregar(plato)}
                disabled={!plato.disponible}
            >
                Agregar
            </button>
        </div>
    );
}

export default PlatoCard1;