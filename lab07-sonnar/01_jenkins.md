# Jenkins + SonnarQube as docker


## Settings
1. Limpiar containers
    ```bash 
    docker rm $(docker ps -aq) -f

    docker rmi $(docker images | grep '^<none>' | awk '{print $3}')
    docker volume ls -qf dangling=true
    docker volume rm $(docker volume ls -qf dangling=true)
    ```     

1. Revisar sonnarQube
    ```bash 
    docker rm $(docker ps -aq) -f
    mkdir -p ./data/sonarqube/conf
    mkdir -p ./data/sonarqube/data
    mkdir -p ./data/sonarqube/logs
    mkdir -p ./data/sonarqube/extensions
    ```     

1. Generar imagen
    ```bash         
    rm -fr jenkins_home
    mkdir jenkins_home
    docker-compose up -d
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    
    docker exec -it --user root jenkins /bin/bash
    chown jenkins /var/run/docker.sock
    docker exec -it jenkins /bin/bash
    docker ps
    ``` 

1. Instalar plugins docker pipeline
    1. Login
    1. Manage Jenkins
    1. Manage Plugins
    1. Clic Avialable
    1. Buscar Plugin: "Pipeline" , "Docker Pipeline"

