import { useParams, Link, useNavigate } from 'react-router-dom';
import { mesasMock } from '../data1/mesas.mock';

export default function DetalleMesa() {
    const { id } = useParams();
    const navigate = useNavigate();

    const mesa = mesasMock.find(m => String(m.id) === id);

    if (!mesa) {
        return (
            <div className="detalle-container">
                <p className="error-text">Mesa {id} no encontrada</p>

                <button
                    className="volver-btn"
                    onClick={() => navigate('/mesas')}
                >
                    Volver a mesas
                </button>
            </div>
        );
    }

    return (
        <div className="detalle-container">
            <Link to="/mesas" className="volver-link">
                ← Volver
            </Link>

            <h1 className="titulo-mesa">
                Mesa {mesa.numero}
            </h1>

            <p>Capacidad: {mesa.capacidad}</p>

            <p>
                Estado:
                <span
                    className={
                        mesa.estado === 'libre'
                            ? 'estado-libre'
                            : 'estado-ocupada'
                    }
                >
                    {' '}{mesa.estado}
                </span>
            </p>

            <p>Comensales: {mesa.comensales}</p>
        </div>
    );
}
