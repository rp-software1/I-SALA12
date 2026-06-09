-BLOQUE B

Si el restaurante usa imágenes de platos almacenadas en un servicio externo (como Cloudinary o AWS S3), ¿qué hay que configurar en next.config.ts para que <Image> de Next.js las muestre?
¿Dónde se configura para imágenes externas? en el archivo next.config.ts 
¿Qué campo de next.config.ts controla eso? en versiones actuales ese campo es imagenes.remotepatterns


-BLOQUE D

Si el backend no está corriendo cuando ejecutas npm run build, ¿el build va a fallar para las páginas con generateMetadata async que hacen fetch?
¿El build falla si el backend está caído? si
¿Por qué? el generatemetadata se ejecuta el proceso del build para asi generar los metadatos y si dentro de esa funcion se hace un fetch al backend y este no llega a responder, se puede producir un error y el nextjs no completaria la generalizacion de la pagina. 
