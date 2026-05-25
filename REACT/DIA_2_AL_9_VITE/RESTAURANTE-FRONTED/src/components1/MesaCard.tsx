type EstadoMesa = 'libre' | 'ocupada' | 'reservada';

interface MesaCardProps {
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    comensales: number;
}

function MesaCard({
    numero,
    capacidad,
    estado,
    comensales,
}: MesaCardProps) {
    return (
        <div>
            <h3>Mesa {numero}</h3>

            <p>Capacidad: {capacidad}</p>

            <p>Comensales: {comensales}</p>

            <p
                className={
                    estado === 'libre'
                        ? 'verde'
                        : estado === 'ocupada'
                            ? 'rojo'
                            : 'amarillo'
                }
            >
                {estado}
            </p>
        </div>
    );
}

export default MesaCard;
