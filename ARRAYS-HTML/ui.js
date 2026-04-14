import {
    buscarPlato,
    filtrarStock,
    venderPlato,
    estadoGeneral
} from "./operaciones.js";

import { menu, agregarPlato } from "./menu.js";


export function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    let html = "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        let estadotexto = "";
        let clase = "";

        if (plato.stock === 0) {
            estadotexto = "AGOTADO";
            clase = "agotado";
        } else if (plato.stock <= 3) {
            estadotexto = "STOCK BAJO";
            clase = "bajo";
        } else {
            estadotexto = "DISPONIBLE";
            clase = "normal";
        }

        html += `<li class="${clase}">
            ${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - ${estadotexto}
        </li>`;
    }

    html += "</ul>";
    html += `<p>Total de platos en el menu: ${menu.length}</p>`;

    output.innerHTML = html;
}



export function renderLista(titulo, listaDeTextos) {
    const output = document.getElementById("output");

    let html = `<h3>${titulo}</h3><ul>`;

    for (let texto of listaDeTextos) {
        html += `<li>${texto}</li>`;
    }

    html += "</ul>";

    output.innerHTML = html;
}


export function mostrarMensajes(texto) {
    const output = document.getElementById("output");
    output.innerHTML = `<p>${texto}</p>`;
}



export function conectarEventos() {

    document.getElementById("btnMostrar").addEventListener("click", () => {
        renderMenu();
    });

    document.getElementById("btnAgregar").addEventListener("click", () => {
        const nuevoPlato = { nombre: "Pizza", precio: 15, stock: 10 };
        agregarPlato(nuevoPlato);
        renderMenu();
    });

    document.getElementById("btnBuscar").addEventListener("click", () => {
        const valor = document.getElementById("inputBuscar").value;

        let resultadoBusqueda = buscarPlato(valor);
        let resultadoVenta = venderPlato(valor, 1);
        let estado = estadoGeneral();

        renderMenu();

        const output = document.getElementById("output");
        output.innerHTML =
            `<p>${resultadoBusqueda}</p>
             <p>${resultadoVenta}</p>
             <p>${estado}</p>` + output.innerHTML;
    });

    document.getElementById("btnStockBajo").addEventListener("click", () => {
        const lista = filtrarStock();

        const textos = lista.map(plato =>
            `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`
        );

        renderLista("Platos con stock bajo", textos);
    });

    document.getElementById("btnResumen").addEventListener("click", () => {
        const resumen = menu.map(plato =>
            `${plato.nombre} - S/ ${plato.precio}`
        );

        renderLista("Resumen del menú", resumen);
    });
}