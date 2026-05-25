import axios from 'axios';

type EstadoMesa =
    | 'libre'
    | 'ocupada'
    | 'reservada';

interface Mesa {
    _id: string;
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    comensales?: number;
}

interface Plato {
    _id: string;
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria: string;
    disponible: boolean;
    stock?: number;
}

interface LoginResponse {
    token: string;
}

interface PedidoData {
    mesaId?: string;
    platos?: Plato[];
    total?: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
        }

        return Promise.reject(error);
    }
);

export async function login(
    correo: string,
    password: string
): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
        '/auth/login',
        {
            correo,
            password,
        }
    );

    localStorage.setItem(
        'token',
        response.data.token
    );

    return response.data;
}

export async function getPlatos(): Promise<Plato[]> {
    const response = await api.get<Plato[]>(
        '/api/platos'
    );

    return response.data;
}

export async function getMesas(): Promise<Mesa[]> {
    const response = await api.get<Mesa[]>(
        '/api/mesas'
    );

    return response.data;
}

export async function getMesasDisponibles(): Promise<Mesa[]> {
    const response = await api.get<Mesa[]>(
        '/api/mesas'
    );

    return response.data.filter(
        (mesa) => mesa.estado === 'libre'
    );
}

export async function crearPedido(
    pedidoData: PedidoData
) {
    const response = await api.post(
        '/api/pedidos',
        pedidoData
    );

    return response.data;
}

export async function getPedido(id: string) {
    const response = await api.get(
        `/api/pedidos/${id}`
    );

    return response.data;
}

export async function cambiarEstadoPedido(
    id: string,
    estado: EstadoMesa
) {
    const response = await api.patch(
        `/api/pedidos/${id}/estado`,
        { estado }
    );

    return response.data;
}
