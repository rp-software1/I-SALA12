# Bloque A
¿La diferencia entre NEXT_PUBLIC_ y las variables sin prefijo fue lo que predijiste?
Sí, fue bastante parecido a lo que esperaba. Aprendí que las variables con el prefijo NEXT_PUBLIC_ pueden utilizarse tanto en el navegador como en el servidor, mientras que las variables sin ese prefijo solo están disponibles en el servidor. También entendí mejor la importancia de usar .env.local para configurar direcciones y valores que podrían cambiar entre entornos sin modificar el código fuente.

# Bloque B
¿El fetch en un Server Component sin useEffect fue más o menos complicado de lo que esperabas?
Al principio pensé que iba a ser más “enredado” porque estaba acostumbrado a usar useEffect para todo, como si fuera el interruptor universal. Pero en Server Components el fetch va directo, casi como si el dato ya “naciera servido en plato”.
Lo único raro al inicio es cambiar el chip: dejar de pensar en “cargar después” y pasar a “cargar mientras se renderiza”. Pero una vez entiendes eso, se siente bastante limpio y hasta más simple.