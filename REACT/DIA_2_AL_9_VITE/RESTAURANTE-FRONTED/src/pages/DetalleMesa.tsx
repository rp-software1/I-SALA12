import {
    useParams,
    Link,
    useNavigate
} from 'react-router-dom';

import {
    useEffect,
    useState
} from 'react';

import type { Mesa } from '../types';

import { getMesas } from '../services/api';

export default function DetalleMesa() {


    const { id } =
        useParams<{ id: string }>();

    const navigate =
        useNavigate();

    const [mesa, setMesa] =
        useState<Mesa | null>(null);

    const [loading, setLoading] =
        useState<boolean>(true);

    const [error, setError] =
        useState<string | null>(null);

    useEffect(() => {

        if (!id) {

            navigate('/mesas');

            return;
        }

        const cargarMesa =
            async (): Promise<void> => {

                try {

                    setLoading(true);

                    const mesas: Mesa[] =
                        await getMesas();

                    const encontrada =
                        mesas.find(
                            (m) =>
                                String(m._id) === id
                        ) ?? null;

                    setMesa(encontrada);

                } catch (err: unknown) {

                    const mensaje =
                        err instanceof Error
                            ? err.message
                            : 'Error al cargar la mesa';

                    setError(mensaje);

                } finally {

                    setLoading(false);

                }
            };

        cargarMesa();

    }, [id, navigate]);

    if (loading) {

        return (
            <p>
                Cargando mesa...
            </p>
        );
    }

    if (error) {

        return (
            <p>
                Error: {error}
            </p>
        );
    }

    if (!mesa) {

        return (

            <div className="detalle-container">

                <p className="error-text">
                    Mesa {id} no encontrada
                </p>

                <button
                    className="volver-btn"
                    onClick={() =>
                        navigate('/mesas')
                    }
                >
                    Volver a mesas
                </button>

            </div>
        );
    }

    return (

        <div className="detalle-container">

            <Link
                to="/mesas"
                className="volver-link"
            >
                ← Volver
            </Link>

            <h1 className="titulo-mesa">

                Mesa {mesa.numero}

            </h1>

            <p>
                Capacidad:
                {mesa.capacidad}
            </p>

            <p>

                Estado:

                <span
                    className={
                        mesa.estado === 'disponible'
                            ? 'estado-libre'
                            : 'estado-ocupada'
                    }
                >

                    {' '}
                    {mesa.estado}

                </span>

            </p>


        </div>
    );
}
