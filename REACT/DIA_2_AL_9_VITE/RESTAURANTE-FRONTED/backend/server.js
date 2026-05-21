import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const platos = [
    {
        _id: '1',
        nombre: 'Lomo saltado',
        categoria: 'segundos',
        precio: 12,
        stock: 3,
        disponible: true,
    },
    {
        _id: '2',
        nombre: 'Arroz con pollo',
        categoria: 'segundos',
        precio: 12,
        stock: 5,
        disponible: true,
    },
    {
        _id: '3',
        nombre: 'Sopa de verduras',
        categoria: 'entradas',
        precio: 8,
        stock: 0,
        disponible: false,
    },
    {
        _id: '4',
        nombre: 'Pollo a la brasa',
        categoria: 'segundos',
        precio: 20,
        stock: 4,
        disponible: true,
    },
    {
        _id: '5',
        nombre: 'Jugo de naranja',
        categoria: 'bebidas',
        precio: 5,
        stock: 8,
        disponible: true,
    },
];

const mesas = [
    {
        _id: 1,
        numero: 1,
        capacidad: 4,
        estado: 'libre',
        comensales: 0,
    },
    {
        _id: 2,
        numero: 2,
        capacidad: 2,
        estado: 'ocupada',
        comensales: 2,
    },
    {
        _id: 3,
        numero: 3,
        capacidad: 6,
        estado: 'reservada',
        comensales: 0,
    },
    {
        _id: 4,
        numero: 4,
        capacidad: 4,
        estado: 'libre',
        comensales: 0,
    },
    {
        _id: 5,
        numero: 5,
        capacidad: 2,
        estado: 'ocupada',
        comensales: 2,
    },
    {
        _id: 6,
        numero: 6,
        capacidad: 8,
        estado: 'reservada',
        comensales: 0,
    },
];

const pedidos = [];

app.post('/auth/login', (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({
            message: 'Correo y contraseÃ±a requeridos',
        });
    }

    res.json({
        token: 'token-falso-react-dia9',
        usuario: {
            nombre: 'Marco',
            rol: 'mesero',
        },
    });
});

app.get('/api/platos', (req, res) => {
    res.json(platos);
});

app.get('/api/mesas', (req, res) => {
    res.json(mesas);
});

app.post('/api/pedidos', (req, res) => {
    const { mesaId, tipo, items } = req.body;

    const total = items.reduce(
        (acc, item) =>
            acc + item.precioUnitario * item.cantidad,
        0
    );

    const nuevoPedido = {
        _id: String(Date.now()),
        mesaId,
        tipo,
        estado: 'pendiente',
        items,
        total,
    };

    pedidos.push(nuevoPedido);

    if (mesaId) {
        const mesaEncontrada = mesas.find(
            (m) => m._id === mesaId
        );

        if (mesaEncontrada) {
            mesaEncontrada.estado = 'ocupada';
        }
    }

    res.status(201).json(nuevoPedido);
});

app.get('/api/pedidos/:id', (req, res) => {
    const pedido = pedidos.find(
        (p) => p._id === req.params.id
    );

    if (!pedido) {
        return res.status(404).json({
            message: 'Pedido no encontrado',
        });
    }

    res.json(pedido);
});

app.patch('/api/pedidos/:id/estado', (req, res) => {
    const pedido = pedidos.find(
        (p) => p._id === req.params.id
    );

    if (!pedido) {
        return res.status(404).json({
            message: 'Pedido no encontrado',
        });
    }

    pedido.estado = req.body.estado;

    res.json(pedido);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${PORT}`);
});