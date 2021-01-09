# Maven
## Settings
1. Instalar maven
    1. Manage Jenkins
    1. Global Tool Configuration
    1. Ir a la sección: "Maven"
    1. Clic en "Add Maven"
        * Name: maven-default
        * Install automatically: Check

1. Instalar plugins maven
    1. Login
    1. Manage Jenkins
    1. Manage Plugins
    1. Clic Avialable
    1. Buscar Plugin: "Maven Integration"

# JOBS
1. Crear job6-maven
    * Crear proyecto del estilo libre.
        * Nombre: job6-maven
        * Description: Maven demo
        * Build --> Invoke top-level Maven targest --> 
        ```bash         
        mvn --version
        ```        