let jugador2 = {
    nombre: "Guerrero",
    vida: 100,
    fuerza: 20,
    nivel: 5,
    armas: "espada"
}

function atacar(jugador2) {
    jugador2.fuerza += 10
    jugador2.vida -= 10
    console.log("El " + jugador2.nombre + " de nivel " + jugador2.nivel + " ataca con su " + jugador2.armas + " a los enemigos con " + jugador2.vida + " de vida y con una fuerza de " + jugador2.fuerza);
}

atacar(jugador2);