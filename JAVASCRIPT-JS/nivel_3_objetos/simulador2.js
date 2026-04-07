let cliente = {
    nombre: "Cristiano",
    dinero: 200,
    hambre: 90
};

let comida = {
    nombre: "costilla de res a la BBQ",
    precio: 20
}

function ordenarComida(cliente, comida) {
    console.log(cliente.nombre + " ordenó " + comida.nombre);
}

function pagar(cliente, comida) {
    cliente.dinero = cliente.dinero - comida.precio
    cliente.hambre -= 40
    console.log(cliente.nombre + " cancelo su comida y ahora tiene " + cliente.dinero + " soles.");
}
function boleta(cliente, comida) {
    console.log("La boleta que se le imprime al cliente sería tal que así:")
    console.log("Nombre cliente: " + cliente.nombre)
    console.log("Comida: " + comida.nombre)
    console.log("Precio: " + comida.precio)
}
function estado(cliente) {
    console.log("Y el estado de " + cliente.nombre + ": dinero = " + cliente.dinero + ", hambre = " + cliente.hambre);
    console.log("Quedando así totalmente satisfecho con la atención brindada")
}

ordenarComida(cliente, comida);
pagar(cliente, comida);
boleta(cliente, comida);
estado(cliente);