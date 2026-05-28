import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components1/NavBar.jsx';
import Home from './pages/Home.js';
import MesasPage from './pages/MesasPage';
import CarritoPage from './pages/CarritoPage';
import MenuPage from './pages/MenuPage';
import DetalleMesa from './pages/DetalleMesa';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <NavBar nombreRestaurante="Restaurante Marco" />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/mesas" element={<MesasPage />} />
                <Route path="/carrito" element={<CarritoPage />} />
                <Route path="/mesas/:id" element={<DetalleMesa />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;