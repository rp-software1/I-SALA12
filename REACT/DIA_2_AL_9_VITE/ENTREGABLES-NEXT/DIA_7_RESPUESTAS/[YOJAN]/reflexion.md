# BLOQUE A
¿Había algún .env commiteado? ¿Cómo lo resolvieron?
No se encontraron archivos .env commiteados en el repositorio. Se verificó usando el comando "git ls-files | grep -i ".env"" y el resultado fue correcto. También se comprobó que ".gitignore" contiene la regla ".env*", por lo que las variables de entorno están protegidas y no serán subidas al repositorio.