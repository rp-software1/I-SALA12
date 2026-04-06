let nombreH1 = "Stark";
let poderH1 = "velocidad";
let energiaH1 = 170;
let ciudadH1 = "América";
let superH1 = "golpe de embestida";


let nombreH2 = "Tony";
let poderH2 = "Trueno";
let energiaH2 = 180;
let ciudadH2 = "Nueva York";
let superH2 = "rayo letal";
let escudo = "escudo magico";


function ataque1() {
    console.log("El héroe " + nombreH1 + " va a la ciudad de " + ciudadH2 + " para atacar con su poder de " + poderH1 + " al también héroe " + nombreH2 + " en un suceso totalmente inesperado.");
}

function defensa2() {
    console.log("Al ver el ataque inesperado, " + nombreH2 + " utiliza su poder de " + poderH2 + " para crear una defensa poderosa en " + ciudadH2 + ", logrando resistir el ataque de " + nombreH1 + ".");
}

function ataque2() {
    console.log("Tras la defensa del heroe, " + nombreH2 + "  usa un contrataque, usando su " + poderH2 + " al también héroe " + nombreH1 + ", enviandolo lejos de donde se encontraban.");
}

function defensa1() {
    console.log("Pero " + nombreH1 + " no se rinde y usa nuevamente su poder de " + poderH1 + " para aterrizar en " + ciudadH1 + " sin hacerse daño luego del ataque de " + nombreH2 + ", logrando resistirlo.");
}

function recargarEnergia1() {
    console.log("Posterior a esto, " + nombreH1 + " va a recargar su energía al centro de la ciudad de " + ciudadH1 + ", haciendo que esta suba a " + (energiaH1 + 100) + " por ciento.");
}

function recargarEnergia2() {
    console.log("Al ver esto, " + nombreH2 + " empieza tambien a recargarse de energía al ver que  " + nombreH1 + ", esta elevando su poder " + (energiaH2 + 100) + " para asi poder seguir con la batalla.");
}


function superAtaque1() {
    console.log("Con su poder al máximo, " + nombreH1 + " lanza su " + superH1 + " contra " + nombreH2 + ", causando un gran impacto en " + ciudadH2 + " y  reduciendo su energía a " + (energiaH2 - 100) + " por ciento.");
}

function superescudo2() {
    console.log("Tras ver el imenso ataque que venia, procedi a defenderme con un, " + escudo + " que terminaria por agotar la mayoria de mi energia acumulada, para poder asi resistir el ataque de " + nombreH1);
}


ataque1();
defensa2();
ataque2();
defensa1()
recargarEnergia1();
recargarEnergia2();
superAtaque1();
superescudo2();