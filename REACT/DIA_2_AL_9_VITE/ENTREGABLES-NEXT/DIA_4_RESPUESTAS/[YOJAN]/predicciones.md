# Bloque A
¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?
¿GET /mesas/:id existe? Aún no verificado
¿Qué retorna si el ID no existe? Probablemente un error 404

# Bloque B
¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?
Sí, generateMetadata puede hacer fetch de datos del backend para construir información dinámica.

¿generateMetadata puede hacer await? 
Sí, puede ser una función async.

¿Puede llamar a getMesaById()? 
Sí, puede llamar a getMesaById() para obtener información real de la mesa y construir el título dinámico de la página.

# Bloque C
¿El Suspense manual que envuelve <MesaDetalle> en page.tsx — cuándo exactamente muestra el skeleton? ¿MesaDetalle hace algún fetch asíncrono?
¿Cuándo se muestra el skeleton de MesaDetalle? 
Se muestra mientras el componente envuelto por Suspense termina de cargarse o hidratarse.

¿MesaDetalle hace fetch o solo usa los datos que recibe por prop? 
MesaDetalle solo utiliza los datos que recibe mediante la prop mesa.

# Bloque D
Después de llamar a cambiarEstadoMesa() con éxito, ¿el usuario tiene que recargar /mesas manualmente para ver el nuevo estado, o Next.js lo actualiza solo?
¿Next.js actualiza /mesas automáticamente? 
Sí, después de invalidar el caché con revalidatePath y volver a navegar a la ruta.

¿Qué hace revalidatePath para que eso ocurra? 
Marca una ruta como desactualizada para que en la siguiente visita se vuelva a obtener información fresca desde el servidor.
