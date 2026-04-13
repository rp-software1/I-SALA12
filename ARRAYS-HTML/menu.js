export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Milanesa", precio: 12, stock: 1 },
    { nombre: "Ceviche", precio: 25, stock: 2 }
];

export function obetenerMenu() {
    return menu;
}


export function agregarPlato(plato) {
    menu.push(plato)
}

export function actualizarStock(nombre, cantidad) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (plato) {
        plato.stock += cantidad;
    }
}