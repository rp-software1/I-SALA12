import { menu } from "./menu.js";

export function buscarPlato(nombre) {
    const plato = menu.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (plato) {
        return `${plato.nombre} - S/ ${plato.precio} - Stock: ${plato.stock}`;
    }

    else {
        return "No encontrado";
    }
}