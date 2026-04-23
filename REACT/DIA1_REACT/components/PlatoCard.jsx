export function PlatoCard({ nombre, categoria, precio, stock, disponible }) {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Categoría: {categoria}</p>
            <p>Precio: S/ {precio}</p>
            <p>Stock: {stock}</p>
            <p style={{ color: disponible ? "black" : "red" }}>{disponible ? "✅ Disponible" : "❌ Agotado"}</p>
        </div>
    );
}