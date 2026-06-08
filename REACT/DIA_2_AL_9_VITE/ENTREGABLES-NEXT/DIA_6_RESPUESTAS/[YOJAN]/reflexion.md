# BLOQUE A
¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?
La predicción fue correcta. CarritoPage no puede exportar metadata porque es un Cliente Component ya que para cambiar el título fue necesario usar useEffect y document.title. Esto funciona para la experiencia dle usuario pero no aporta al SEO porque los motores de búsqueda no dependen de JavaScript para leer la metadata inicial.
