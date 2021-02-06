# Jenkins


## Settings
1. Limpiar containers
    ```bash 
    docker rm $(docker ps -aq) -f
    ```

1. Iniciar jenkins
    ```bash         
    rm -fr jenkins_home
    mkdir jenkins_home
    docker-compose up -d
    
    docker exec -it --user root jenkins /bin/bash
    chown jenkins /var/run/docker.sock
    docker exec -it jenkins /bin/bash

    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    ``` 