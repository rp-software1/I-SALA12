import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import MesasPage from './pages/MesasPage.jsx';

function App() {
    return (
        <div>
            <NavBar nombreRestaurante="Restaurante Marco" />
            <Home />
            <MesasPage />
        </div>
    );
}

export default App;