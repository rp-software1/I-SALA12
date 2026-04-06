let jugador2 = {
    nombre: "Guerrero",
    vida: 100,
    fuerza: 20,
    nivel: 5,
    armas: "espada",
    monedas: 100,
    objeto: "armamento"
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

function tienda(jugador2) {
    jugador2.monedas -= 20
    console.log("El " + jugador2.nombre + " se puede dirigir a una tienda para comprar  " + jugador2.objeto + " con el que puede mejorar sus habilidades con un valor de apartir de 20 monedas de oro  ")

}

function estado(jugador2) {
    console.log("Las estadísticas del " + jugador2.nombre + " son: ");
    console.log("Vida: " + jugador2.vida);
    console.log("Fuerza: " + jugador2.fuerza);
    console.log("Nivel: " + jugador2.nivel);
    console.log("Armas: " + jugador2.armas);
    console.log("Monedas de oro: " + jugador2.monedas);
    console.log("Objeto especial: " + jugador2.objeto);
}

atacar(jugador2);
curarse(jugador2);
subirnivel(jugador2);
tienda(jugador2);
estado(jugador2);

