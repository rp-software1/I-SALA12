# BLOQUE A
¿El primer deploy fallará sin variables de entorno?
Sí, probablemente.

¿Qué error podría aparecer?
Algo relacionado con NEXT_PUBLIC_API_URL no definida o errores de fetch porque la URL del backend no está configurada en Vercel.

# BLOQUE C
¿Cuántos redeploys necesita Vercel después de configurar variables?
1 redeploy debería ser suficiente.

¿Vercel hace el redeploy automáticamente al agregar variables?
No, normalmente hay que ejecutarlo manualmente o hacer un nuevo push.
