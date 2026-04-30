import PropTypes from 'prop-types';

function NavBar({ nombreRestaurante = 'Restaurante' }) {
    return (
        <nav>
            <h1>{nombreRestaurante}</h1>
            <ul>
                <li>Carta</li>
                <li>Mesas</li>
                <li>Comandas</li>
            </ul>
        </nav>
    );
}

NavBar.propTypes = {
    nombreRestaurante: PropTypes.string,
};
export default NavBar;