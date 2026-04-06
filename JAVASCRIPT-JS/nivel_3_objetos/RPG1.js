let jugador1 = {
    nombre: "Xorus",
    vida: 100,
    fuerza: 120,
    nivel: 70,
    pociones: 10
}


function entrenar(jugador1) {
    jugador1.pociones += 5
    jugador1.nivel += 20
    jugador1.vida -= 10

    console.log(jugador1.nombre + " entrena duramente contra un dragón, al vencerlo este les dropea pociones de vida y su fuerza incrementa a " + jugador1.fuerza + ".");
}

function curarse(jugador1) {
    jugador1.vida += 14;
    jugador1.pociones -= 1;

    console.log("Posteriormente " + jugador1.nombre + " se cura con las pociones dropeadas; por lo tanto ahora tiene " + jugador1.vida + " de vida");
}

entrenar(jugador1);
curarse(jugador1)
