# Predicción B:

¿Cuántos archivos vas a renombrar en total?

11 archivos.

Lista de archivos:

- NavBar.jsx
- PlatoCard.jsx
- MesaCard.jsx
- MenuPage.jsx
- MesasPage.jsx
- CarritoPage.jsx
- DetalleMesa.jsx
- NotFound.jsx
- PedidoContext.jsx
- App.jsx
- main.jsx

¿En qué tipo de líneas crees que aparecerá el primer error TS?

Probablemente en props, parámetros de funciones y variables que no tienen tipo definido.

==============================================================================================

# Predicción C:

El componente PlatoCard recibe un plato como prop.

¿Qué propiedades tiene un plato según el modelo de datos del sistema?
¿Qué tipo TypeScript corresponde a cada una?

_id:          string
nombre:       string
precio:       number
categoria:    string
disponible:   boolean

==============================================================================================

# Predicción D:
¿Qué props recibe MesaCard? 
MesaCard recibe una prop llamada mesa y posiblemente una función onClick para seleccionar o manejar la mesa.

¿TypeScript puede inferir el tipo de retorno de una función que retorna JSX sin que lo declares?
Sí, TypeScript puede inferir automáticamente el tipo de retorno de una función que retorna JSX aunque no se declare explícitamente.