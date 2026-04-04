let nombreH1 = "Stark";
let poderH1 = "velocidad y alta resistencia";
let energiaH1 = 170;
let ciudadH1 = "América";
let superH1 = "golpe de embestida";


let nombreH2 = "Tony";
let poderH2 = "Trueno";
let energiaH2 = 180;
let ciudadH2 = "Nueva York";
let superH2 = "rayo letal";

function ataque1() {
    console.log("El héroe " + nombreH1 + " va a la ciudad de " + ciudadH2 + " para atacar con su poder de " + poderH1 + " al también héroe " + nombreH2 + " en un suceso totalmente inesperado.");
}

function defensa2() {
    console.log("Al ver el ataque inesperado, " + nombreH2 + " utiliza su poder de " + poderH2 + " para crear una defensa poderosa en " + ciudadH2 + ", logrando resistir el ataque de " + nombreH1 + ".");
}

function ataque2() {
    console.log("Tras la defensa del heroe " + nombreH2 + "  usa un contrataque, usando su " + poderH2 + " al también héroe " + nombreH1 + ", enviandolo lejos de donde se encontraban.");
}



ataque1();
defensa2();
ataque2();