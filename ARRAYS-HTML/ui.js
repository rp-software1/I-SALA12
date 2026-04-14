import { buscarPlato, filtrarStock, venderPLato, estadoGeneral } from "./operaciones.js";
import { menu } from "./menu.js";

export function renderMenu() {
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

// Función renderizar lista
export function renderLista(titulo, listaDeTextos) {
    const output = document.getElementById("output");
    let html = `<h3>${titulo}</h3>`;
    html += "<ul>";
    for (let i = 0; i < listaDeTextos.length; i++) {
        html += `<li>${listaDeTextos[i]}</li>`;
    }
    html += "</ul>";
    output.innerHTML = html;

}

//Funcion mostrar mensajes

export function mostrarMensajes(texto) {
    const output = document.getElementById("output");
    output.innerHTML = `<p> ${texto} </p>`
}

// 4) EVENTOS: conectar botones con funciones



export function conectarEventos() {
    document.getElementById("btnMostrar").addEventListener("click", () => {
        renderMenu();
    });

    document.getElementById("btnAgregar").addEventListener("click", () => {
        alert("Plato agregado (pendiente integracion)");
    });

    document.getElementById("btnBuscar").addEventListener("click", () => {
        const valor = document.getElementById("inputBuscar").value;

        let resultadoBusqueda = buscarPlatoPorNombre(valor);
        let resultadoVenta = venderPLato(valor, 1);
        let estadoGeneral = estadoGeneral();

        renderMenu();
        const output = document.getElementById("output");
        output.innerHTML = `<p>${resultadoBusqueda}</p><p>${resultadoVenta}</p><p>${estado}</p>` + output.innerHTML;
    });

    document.getElementById("btnStockBajo").addEventListener("click", () => {
        filtrarStockBajo();

    });

    document.getElementById("btnResumen").addEventListener("click", () => {
        obtenerResumenMenu();
    })
}