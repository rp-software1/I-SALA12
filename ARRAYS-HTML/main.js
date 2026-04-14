import { conectarEventos, renderMenu } from "./ui.js";

function iniciarApp() {
    console.log("Sistema iniciado");
    conectarEventos();
    renderMenu();
}
iniciarApp();