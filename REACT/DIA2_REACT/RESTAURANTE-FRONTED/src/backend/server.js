import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

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

app.get('/api/platos', (req, res) => {
    res.json(platos);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${PORT}`);
});
