# Jenkins as docker

## Settings

1. Generar imagen
    ```bash         
    docker-compose build
    rm -fr jenkins_home
    mkdir jenkins_home
    docker-compose up -d
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    ``` 

1. Instalar plugins docker pipeline
    1. Login
    1. Manage Jenkins
    1. Manage Plugins
    1. Clic Avialable
    1. Buscar Plugin: "Pipeline" , "Docker Pipeline"