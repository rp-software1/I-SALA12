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

function curarse(jugador2) {
    jugador2.vida += 14;
    console.log("Al enfrentar a algun enemigo, el " + jugador2.nombre + " de nivel " + jugador2.nivel + " logra curarce mediante la energia vital que le brinda su enemigo vencido, por lo tanto ahora tiene " + jugador2.vida + " de vida");
}

function subirnivel(jugador2) {
    jugador2.nivel += 2;
    jugador2.fuerza += 10;
    jugador2.vida += 10;

    console.log("Al derrotar o cumplir misiones el " + jugador2.nombre + " de nivel 5, sube al nivel " + jugador2.nivel + " y junto a ello sube su fuerza a " + jugador2.fuerza + " y su vida a " + jugador2.vida);
}

atacar(jugador2);
curarse(jugador2);
subirnivel(jugador2);

