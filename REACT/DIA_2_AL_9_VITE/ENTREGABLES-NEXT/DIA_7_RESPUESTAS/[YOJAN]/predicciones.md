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

# BLOQUE D
¿Las rutas dinámicas como /mesa/[id] van a funcionar en Vercel igual que en localhost? ¿O hay alguna diferencia en cómo Vercel maneja los parámetros?
¿/mesa/[id] funciona igual en Vercel? 
Sí
¿Hay alguna diferencia con localhost? 
No debería haber diferencias funcionales.
La única diferencia es que los datos provienen
de un backend público en Railway en lugar de
localhost:3001.
