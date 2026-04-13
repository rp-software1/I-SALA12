// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Milanesa", precio: 12, stock: 1 },
    { nombre: "Ceviche", precio: 25, stock: 2 }
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        let estadotexto = "";

        if (plato.stock === 0) {
            estadotexto = "AGOTADO";
            clase = "agotado";
        } else if (plato.stock >= 1 && plato.stock <= 3) {
            estadotexto = "STOCK BAJO";
            clase = "bajo";
        } else {
            estadotexto = "DISPONIBLE";
            clase = "normal";
        }
        html += `<li class ="${clase}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - ${estadotexto}</li>`;
    }

    html += "</ul>";
    html += `<p>Total de platos en el menu: ${contarPlatos()}</p>`;
    output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Pollo a la brasa", precio: 20, stock: 4 };
    const nuevoPlato2 = { nombre: "Causa", precio: 10, stock: 2 };
    menu.push(nuevoPlato);
    menu.push(nuevoPlato2)
}

// Función de contar platos
function contarPlatos() {
    return menu.length;
}

// Función renderizar lista
function renderLista(titulo, listaDeTextos) {
    const output = document.getElementById("output");
    let html = `<h3>${titulo}</h3>`;
    html += "<ul>";
    for (let i = 0; i < listaDeTextos.length; i++) {
        html += `<li>${listaDeTextos[i]}</li>`;
    }
    html += "</ul>";
    output.innerHTML = html;

}

// Función buscar por nombre
function buscarPlatoPorNombre(nombre) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (plato) {
        return `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`;
    } else {
        return "No encontrado";
    }
}

// Función filtro por stock bajo < 3
function filtrarStockBajo() {
    const platosBajoStock = menu.filter(plato => plato.stock <= 3);

    if (platosBajoStock.length > 0) {
        const listaDeTextos = platosBajoStock.map(plato =>
            `${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}`
        );
        renderLista("Platos con stock bajo", listaDeTextos);
    } else {
        renderLista("Platos con stock bajo", ["No hay platos con stock bajo"]);
    }
}

// Función  vender plato
function venderPLato(nombre, cantidad) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (!plato) {
        return "No encontrado";
    }
    if (plato.stock === 0) {
        return "No disponible";
    }

    if (plato.stock < cantidad) {
        return "Stock insuficiente"
    }

    plato.stock -= cantidad;

    renderMenu();
    return "Venta realizada";
}

// Función  resumen del menú

function obtenerResumenMenu() {
    const resumen = menu.map(plato => `${plato.nombre} - S/ ${plato.precio}`);
    renderLista("Resumen del menú", resumen);
}

//Funcion obtener estado

function obtenerEstado(stock) {
    if (stock === 0) {
        return "AGOTADO";
    } else if (stock >= 1 && stock <= 3) {
        return "CRITICO";
    } else {
        return "DISPONIBLE";
    }
};



// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();

    document.getElementById("btnAgregar").disabled = true;
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const valor = document.getElementById("inputBuscar").value;

    let resultadoBusqueda = buscarPlatoPorNombre(valor);
    let resultadoVenta = venderPLato(valor, 1);

    renderMenu();

    const output = document.getElementById("output");
    output.innerHTML = `<p>${resultadoBusqueda}</p><p>${resultadoVenta}</p>` + output.innerHTML;
});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarStockBajo();

});

document.getElementById("btnResumen").addEventListener("click", () => {
    obtenerResumenMenu();
})
