import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const platos = [
    {
        _id: '1',
        nombre: 'Lomo saltado',
        descripcion: 'Lomo saltado tradicional',
        categoria: 'segundos',
        precio: 12,
        disponible: true,
    },
    {
        _id: '2',
        nombre: 'Arroz con pollo',
        descripcion: 'Arroz con pollo casero',
        categoria: 'segundos',
        precio: 12,
        disponible: true,
    },
    {
        _id: '3',
        nombre: 'Sopa de verduras',
        descripcion: 'Sopa saludable',
        categoria: 'entradas',
        precio: 8,
        disponible: false,
    },
    {
        _id: '4',
        nombre: 'Pollo a la brasa',
        descripcion: 'Pollo a la brasa entero',
        categoria: 'segundos',
        precio: 20,
        disponible: true,
    },
    {
        _id: '5',
        nombre: 'Jugo de naranja',
        descripcion: 'Jugo natural',
        categoria: 'bebidas',
        precio: 5,
        disponible: true,
    },
];

const mesas = [
    {
        _id: '1',
        numero: 1,
        capacidad: 4,
        estado: 'disponible',
        pedidoActivoId: null,
    },
    {
        _id: '2',
        numero: 2,
        capacidad: 2,
        estado: 'ocupada',
        pedidoActivoId: '101',
    },
    {
        _id: '3',
        numero: 3,
        capacidad: 6,
        estado: 'reservada',
        pedidoActivoId: null,
    },
    {
        _id: '4',
        numero: 4,
        capacidad: 4,
        estado: 'disponible',
        pedidoActivoId: null,
    },
    {
        _id: '5',
        numero: 5,
        capacidad: 2,
        estado: 'ocupada',
        pedidoActivoId: '102',
    },
    {
        _id: '6',
        numero: 6,
        capacidad: 8,
        estado: 'reservada',
        pedidoActivoId: null,
    },
];

const pedidos = [];


app.get('/mesas', (req, res) => {
    res.json(mesas);
});

app.get('/platos', (req, res) => {
    res.json(platos);
});

app.post('/pedidos', (req, res) => {
    const nuevoPedido = {
        _id: String(Date.now()),
        ...req.body,
        creadoEn: new Date().toISOString(),
        actualizadoEn: new Date().toISOString(),
    };

    pedidos.push(nuevoPedido);

    res.status(201).json(nuevoPedido);
});

app.patch('/pedidos/:id/estado', (req, res) => {
    const pedido = pedidos.find(
        (p) => p._id === req.params.id
    );

    if (!pedido) {
        return res.status(404).json({
            message: 'Pedido no encontrado',
        });
    }

    pedido.estado = req.body.estado;
    pedido.actualizadoEn = new Date().toISOString();

    res.json(pedido);
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(
        `Servidor Backend corriendo en http://localhost:${PORT}`
    );
});