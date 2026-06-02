BLOQUE C

¿error.tsx captura errores de JavaScript (como un error de sintaxis en el código) o solo errores del fetch (como un 500 del backend)?

error.tsx captura: esto capturaria los errores que suelen ocurrir durante el renderizado o la ejecucion en la ruta de nextjs e incluso los de fetch
¿Qué pasa si getMesas() lanza un Error con mensaje "503"?: esto se propagaria hasta error.tsx renderizandose en un error, donde dicho erro tendria el mensaje de 503. 
