import {
    buscarPlato,
    filtrarStock,
    estadoGeneral,
    venderPlatoAsync
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



export function mostrarMensajes(texto, tipo = "normal") {
    const output = document.getElementById("output");
    let color = "black";
    if (tipo === "procesando") color = "blue";
    if (tipo === "ok") color = "green";
    if (tipo === "error") color = "red";

    output.innerHTML = `<p style="color:${color}">${texto}</p>` + output.innerHTML;
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

        mostrarMensajes(resultadoBusqueda);
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

    document.getElementById("btnVender").addEventListener("click", async () => {

        const valor = document.getElementById("inputBuscar").value.trim();
        const cantidad = parseInt(document.getElementById("inputCantidad").value);

        if (!valor) {
            return mostrarMensajes("Nombre vacío", "error");
        }

        if (isNaN(cantidad)) {
            return mostrarMensajes("Cantidad invslida", "error");
        }
        if (cantidad <= 0) {
            return mostrarMensajes("Cantidad debe ser mayor a 0", "error");
        }


        try {
            mostrarMensajes("Procesando pedido...", "procesando");

            const resultado = await venderPlatoAsync(valor, cantidad);

            renderMenu();
            mostrarMensajes(resultado, "ok");

        } catch (error) {

            if (error.name === "ErrorNegocio") {
                mostrarMensajes(error.message, "error");
            } else {
                mostrarMensajes("Error del sistema: " + error.message, "error");
            }
        }
    });
}