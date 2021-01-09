# JOBS
1. Crear job5-remote-task
    * Crear proyecto del estilo libre.
        * Nombre: job5-remote-task
        * Description: Remote task
        * Build --> Execute shell script on remote host using shh --> 
        ```bash         
        echo "Fecha $(date)"
        echo "Sever $(hostname)"
        cat /etc/hosts
        ```        