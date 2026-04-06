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


ordenarComida(cliente);
pagar(cliente);