import { NavLink } from 'react-router-dom';

interface NavBarProps {
    nombreRestaurante?: string;
}

const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? 'text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1'
        : 'text-white hover:text-yellow-300 transition-colors no-underline';

function NavBar({
    nombreRestaurante = 'Restaurante',
}: NavBarProps) {
    return (
        <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-8">
            <h1 className="font-bold text-lg">{nombreRestaurante}</h1>

            <ul className="flex gap-6">
                <li>
                    <NavLink to="/" className={linkClass}>
                        Carta
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/mesas" className={linkClass}>
                        Mesas
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/carrito" className={linkClass}>
                        Carrito
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
