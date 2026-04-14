## ESTRUCTURA DEL PROYECTO

El sistema app.js fue dividido en módulos para mejorar la organización y escalabilidad del código.

Siendo así que:

- index.html es la parte principal donde se gestionan los botones y el enlace con el archivo main.js.

- menu.js contiene los datos del menú y funciones para gestionarlos (agregar platos, actualizar stock)

- operaciones.js contiene la lógica del negocio (buscar platos, vender, filtrar stock, estado general, estado por producto)

- ui.js que maneja la interfaz del usuario (renderizado del menú, listas, mensajes y eventos del DOM)

- main.js posee los puntos de inicio del sistema. Conecta los módulos e iniciar  la apliación.

