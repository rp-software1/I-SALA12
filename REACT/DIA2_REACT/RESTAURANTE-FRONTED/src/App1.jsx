import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import MesasPage from './pages/MesasPage.jsx';
import ComandasPage from './pages/ComandasPage';
import CarritoPage from './pages/CarritoPage';

function App() {
    return (
        <div>
            <NavBar nombreRestaurante="Restaurante Marco" />
            <Home />
            <MesasPage />
            <ComandasPage />
            <CarritoPage />

        </div>
    );
}

export default App;
