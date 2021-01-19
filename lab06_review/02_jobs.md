# JOBS
1. Crear job7-maven-docker
    * Crear proyecto del estilo libre.
        * Nombre: job7-maven-docker
        * Description: maven docker
        * Build --> Execute shell script on remote host using shh --> 
        ```bash         
        echo "Fecha $(date)"
        echo "Sever $(hostname)"
        cat /etc/hosts
        ```        