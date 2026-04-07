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
    console.log("\nEl " + jugador2.nombre + " ataca con su " + jugador2.armas + " a los enemigos con una fuerza de " + jugador2.fuerza + " y " + jugador2.vida + " de vida");
}

function curarse(jugador2) {
    jugador2.vida += 14;
    console.log("\nAl enfrentar a algun enemigo, el " + jugador2.nombre + " logra curarce mediante la energia vital que le brinda su enemigo vencido, por lo tanto ahora tiene " + jugador2.vida + " de vida");
}

function subirnivel(jugador2) {
    jugador2.nivel += 2;
    jugador2.fuerza += 10;
    jugador2.vida += 10;

    console.log("\nAl derrotar o cumplir misiones, el " + jugador2.nombre + " sube al nivel " + jugador2.nivel + " y junto a ello sube su fuerza a " + jugador2.fuerza + " y su vida a " + jugador2.vida);
}

function tienda(jugador2) {
    jugador2.monedas -= 20
    console.log("\nEl " + jugador2.nombre + " se dirige a una tienda para comprar  " + jugador2.objeto + " por 20 monedas de oro para poder mejorar sus habilidades  ")

}

function estado(jugador2) {
    console.log("\nLas estadísticas del " + jugador2.nombre + " son: ");
    console.log("\nVida: " + jugador2.vida);
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

