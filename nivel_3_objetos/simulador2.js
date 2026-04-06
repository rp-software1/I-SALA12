let cliente = {
    nombre: "Cristiano",
    dinero: 200,
    hambre: 90
};

function ordenarComida(cliente) {
    console.log(cliente.nombre + " Ordeno costilla de res a la BBQ");
}

function pagar(cliente) {
    cliente.dinero -= 70
    cliente.hambre -= 40
    console.log(cliente.nombre + " canselo su comida y ahora tiene " + cliente.dinero + " soles.");
}

function mostrar(cliente) {
    console.log("Estado de " + cliente.nombre + ": dinero = " + cliente.dinero + ", hambre = " + cliente.hambre);
}

ordenarComida(cliente);
pagar(cliente);
mostrar(cliente);