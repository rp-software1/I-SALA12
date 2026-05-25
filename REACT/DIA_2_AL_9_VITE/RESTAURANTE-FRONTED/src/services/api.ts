import axios from 'axios';
import type {
    Mesa,
    Pedido,
    EstadoPedido,
} from '../types';

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
) {
    const response = await api.post(
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

export async function getPlatos() {
    const response = await api.get(
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
        (mesa) => mesa.estado === 'disponible'
    );
}

export async function crearPedido(
    datos: Omit<
        Pedido,
        '_id' | 'creadoEn' | 'actualizadoEn'
    >

): Promise<Pedido> {
    const response = await api.post<Pedido>(
        '/api/pedidos',
        datos
    );

    return response.data;
}

export async function getPedido(
    id: string
): Promise<Pedido> {
    const response = await api.get<Pedido>(
        `/api/pedidos/${id}`
    );

    return response.data;
}

export async function cambiarEstadoPedido(
    pedidoId: string,
    estado: EstadoPedido
): Promise<Pedido> {
    const response = await api.patch<Pedido>(
        `/api/pedidos/${pedidoId}/estado`,
        { estado }
    );

    return response.data;
}
