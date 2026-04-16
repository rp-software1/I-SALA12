import { menu } from "./menu.js";

export function buscarPlato(nombre) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (plato) {
        return `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`;
    } else {
        return "No encontrado";
    }
}

export function filtrarStock() {
    return menu.filter(plato => plato.stock <= 3);
}

export function venderPlato(nombre, cantidad) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (!plato) return "No encontrado";
    if (plato.stock === 0) return "No disponible";
    if (plato.stock < cantidad) return "Stock insuficiente";

    plato.stock -= cantidad;
    return "Venta realizada";
}

export async function venderPlatoAsync(nombre, cantidad) {
    const resultado = venderPlato(nombre, cantidad);

    if (!resultado.ok) {
        throw new Error(resultado.mensaje);
    }

    const respuesta = await simularRespuestaServidor(resultado.mensaje);
    return respuesta;
}


export function obtenerEstado(stock) {
    if (stock === 0) return "AGOTADO";
    if (stock <= 3) return "CRITICO";
    return "DISPONIBLE";
}

export function estadoGeneral() {
    let agotado = 0;
    let bajos = 0;

    for (let plato of menu) {
        if (plato.stock === 0) agotado++;
        else if (plato.stock <= 3) bajos++;
    }

    if (agotado > 0)
        return "Hay platos agotados";
    if (bajos > 0)
        return "Hay platos con stock bajo";
    return "Todo en orden";
}

// funcion de Crear simulación

export function simularRespuestaServidor(resultado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const falla = Math.random() < 0.3;
            if (falla) {
                reject("Error del servidor simulado.");
            } else {
                resolve(resultado);
            }
        }, 2000);
    });
}