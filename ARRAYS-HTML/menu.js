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
