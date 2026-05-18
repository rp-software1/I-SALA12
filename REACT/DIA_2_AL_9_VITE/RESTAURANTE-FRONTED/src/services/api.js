import axios from 'axios';

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

export async function login(correo, password) {
    const response = await api.post('/auth/login', {
        correo,
        password,
    });
    localStorage.setItem('token', response.data.token);
    return response.data;

}

export async function getPlatos() {
    const response = await api.get('/api/platos');
    return response.data;
}

export async function getMesas() {
    const response = await api.get('/api/mesas');
    return response.data;
}

export async function getMesasDisponibles() {
    const response = await api.get('/api/mesas');
    return response.data.filter(
        (mesa) => mesa.estado === 'libre'
    );
}

export async function crearPedido(pedidoData) {
    const response = await api.post(
        '/api/pedidos',
        pedidoData
    );
    return response.data;
}

export async function getPedido(id) {
    const response = await api.get(`/api/pedidos/${id}`);
    return response.data;
}

export async function cambiarEstadoPedido(id, estado) {
    const response = await api.patch(`/api/pedidos/${id}/estado`, { estado });
    return response.data;
}
