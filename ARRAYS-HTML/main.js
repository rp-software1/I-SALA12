import { conectarEventos, renderMenu } from "./ui.js";

function iniciarApp() {
    console.log("Sistema Restaurante iniciado");
    conectarEventos();
    renderMenu();
}

iniciarApp();