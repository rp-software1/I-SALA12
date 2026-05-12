import NavBar from './components1/NavBar.jsx';
import Home from './pages/Home.jsx';
import MesasPage from './pages/MesasPage.jsx';
import ComandasPage from './pages/ComandasPage';
import CarritoPage from './pages/CarritoPage';
import MenuPage from './pages/MenuPage';

function App() {
    return (
        <div>
            <NavBar nombreRestaurante="Restaurante Marco" />
            <Home />
            <MesasPage />
            <ComandasPage />
            <CarritoPage />
            <MenuPage />

        </div>
    );
}

export default App;
