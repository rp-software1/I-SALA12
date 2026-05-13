import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>

            <p className="notfound-text">
                Esta página no existe en el restaurante
            </p>

            <button
                className="notfound-btn"
                onClick={() => navigate('/')}
            >
                Ir a la carta
            </button>
        </div>
    );
}