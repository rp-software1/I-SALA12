import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import MesasPage from './pages/MesasPage.jsx';
import ComandasPage from './pages/ComandasPage';
import CarritoPage from './pages/CarritoPage';
import MenuPage from './pages/MenuPage';
import DetalleMesa from './pages/DetalleMesa';


function App() {
    return (
        <BrowserRouter>
            <NavBar nombreRestaurante="Restaurante Marco" />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/mesas' element={<MesasPage />} />
                <Route path='/comandas' element={<ComandasPage />} />
                <Route path='/carrito' element={<CarritoPage />} />
                <Route path='/mesas/:id' element={<DetalleMesa />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

