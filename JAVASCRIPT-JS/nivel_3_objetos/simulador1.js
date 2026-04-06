let cliente = {
    nombre: "Yojan",
    dinero: 150,
    hambre: 90
};

function ordenarComida(cliente) {
    console.log(cliente.nombre + " ordenó comida en Burger King.");
}

function pagar(cliente) {
    cliente.dinero -= 10
    cliente.hambre -= 60
    console.log(cliente.nombre + " pagó su comida y ahora tiene " + cliente.dinero + " soles.");
}

function mostrar(cliente) {
    console.log("Estado de " + cliente.nombre + ": dinero = " + cliente.dinero + ", hambre = " + cliente.hambre);
}

ordenarComida(cliente);
pagar(cliente);
mostrar(cliente);