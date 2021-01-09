1. Preparación:
    * Upload files 
        * docker-compose-v1.yaml
    * Crear folder: 

    ```bash
    mkdir jenkins_home
    ```

1. Iniciar docker-compose
    ```bash
    docker-compose  -f docker-compose-v1.yaml up -d
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    docker exec -it jenkins bash
    ```