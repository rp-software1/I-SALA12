// 1. createContext — crea el contenedor global
//    Va en un archivo separado: src/context/PedidoContext.jsx
const PedidoContext = createContext(null);

// 2. Provider — el componente que tiene el estado y lo comparte
//    Envuelve la app en main.jsx o App.jsx
function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState(estadoInicial);
    return (
        <PedidoContext.Provider value={{ pedido, setPedido }}>
            {children}
        </PedidoContext.Provider>
    );
}

// 3. useContext — el hook que usa cualquier componente para leer el estado
//    No importa qué tan adentro esté el componente en el árbol
function CarritoPage() {
    const { pedido } = useContext(PedidoContext);
    return <p>Items: {pedido.items.length}</p>;
}
