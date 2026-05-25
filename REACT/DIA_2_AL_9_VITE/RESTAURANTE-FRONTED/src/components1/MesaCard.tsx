import type { Mesa } from '../types';

interface MesaCardProps {
    mesa: Mesa;
    onClick: (mesa: Mesa) => void;
}

function MesaCard({
    mesa,
    onClick,
}: MesaCardProps) {
    return (
        <div onClick={() => onClick(mesa)}>
            <h3>Mesa {mesa.numero}</h3>

            <p>Capacidad: {mesa.capacidad}</p>

            <p>{mesa.estado}</p>
        </div>
    );
}

export default MesaCard;
