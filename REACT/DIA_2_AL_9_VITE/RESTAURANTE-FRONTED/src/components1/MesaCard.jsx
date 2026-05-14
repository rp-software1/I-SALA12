import PropTypes from 'prop-types';

function MesaCard({ numero, capacidad, estado, comensales }) {
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

MesaCard.propTypes = {
    numero: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    estado: PropTypes.oneOf(['libre', 'ocupada', 'reservada']).isRequired,
    comensales: PropTypes.number.isRequired,
};

export default MesaCard;
