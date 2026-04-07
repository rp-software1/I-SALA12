let jugador1 = {
    nombre: "Xorus",
    vida: 100,
    fuerza: 120,
    nivel: 70,
    pociones: 10,
    dinero: 190,
    objeto: "escudo de diamente"
}


function entrenar(jugador1) {
    jugador1.pociones += 5;
    jugador1.nivel += 5;
    jugador1.vida -= 10;
    jugador1.dinero += 5;
    jugador1.fuerza += 15;

    console.log("\n" + jugador1.nombre + " entrena duramente contra un dragón. Al vencerlo, obtiene pociones de vida y su fuerza incrementa a " + jugador1.fuerza + ".");
}

function curarse(jugador1) {
    jugador1.vida += 24;
    jugador1.pociones -= 1;

    console.log("\n" + jugador1.nombre + " se cura con las pociones dropeadas; por lo tanto ahora tiene " + jugador1.vida + " de vida");
}

function subirnivel(jugador1) {
    jugador1.nivel += 10;
    jugador1.fuerza += 10;
    jugador1.vida += 20;
    jugador1.pociones -= 7;
    jugador1.dinero += 25;

    console.log("\nAsu vez, después de matar varios jefes, con ayuda de las pociones que le quedaban, " + jugador1.nombre + " sube al nivel " + jugador1.nivel + ".");
}

function tienda(jugador1) {
    jugador1.dinero -= 60
    console.log("\n" + jugador1.nombre + " abre la tienda del juego para comprar un " + jugador1.objeto + " especial por el valor de 60 monedas")

}

function estado(jugador1) {
    console.log("\nQuedandolas estadísticas de " + jugador1.nombre + " así: ");
    console.log("Vida: " + jugador1.vida);
    console.log("Fuerza: " + jugador1.fuerza);
    console.log("Nivel: " + jugador1.nivel);
    console.log("Cantidad de pociones: " + jugador1.pociones);
    console.log("Dinero: " + jugador1.dinero);
    console.log("Objeto especial: " + jugador1.objeto);
}

entrenar(jugador1);
curarse(jugador1);
subirnivel(jugador1);
tienda(jugador1);
estado(jugador1);

