function PLatoCard1({ nombre, categoria, precio, stock, disponible }) {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Categoría: {categoria}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
            <p className={disponible ? 'disponible' : 'agotado'}>
                {disponible ? '✅ Disponible' : '❌ Agotado'}
            </p>
        </div>
    );
}

export default PLatoCard1;
