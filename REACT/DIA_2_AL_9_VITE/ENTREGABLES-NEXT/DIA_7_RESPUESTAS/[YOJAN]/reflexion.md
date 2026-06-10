# BLOQUE A
¿Había algún .env commiteado? ¿Cómo lo resolvieron?
No se encontraron archivos .env commiteados en el repositorio. Se verificó usando el comando "git ls-files | grep -i ".env"" y el resultado fue correcto. También se comprobó que ".gitignore" contiene la regla ".env*", por lo que las variables de entorno están protegidas y no serán subidas al repositorio.

# BLOQUE B
¿El primer deploy falló como se predijo, o tuvo otro error?
Sí, falló como se predijo. El error fue que NEXT_PUBLIC_API_URL no estaba configurada en Vercel. El build se detuvo al intentar generar la ruta dinámica /mesa/[mesaId].