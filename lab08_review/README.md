
1. Iniciar Jenkins con soporte para docker

    ```console
    docker-compose -f ./docker-compose-v2.yaml build
    mkdir jenkins_home
    docker-compose -f ./docker-compose-v2.yaml up -d
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    docker exec -it jenkins bash
    docker ps
    ```

1. Verificar plugins "pipeline", "Docker Pipeline"

1. Single step: 
    Crear job como pipeline con el nombre pipeline01-job y copiar demo01.jenkinsfile

1. Multiple step:
    Crear job como pipeline con el nombre pipeline02-job y copiar demo02.jenkinsfile

1. Retry:
    Crear job como pipeline con el nombre pipeline03-job y copiar demo03.jenkinsfile

1. Timeout:
    Crear job como pipeline con el nombre pipeline04-job y copiar demo04.jenkinsfile    

1. Postactions:
    Crear job como pipeline con el nombre pipeline05-job y copiar demo05.jenkinsfile    

1. Variables:
    Crear job como pipeline con el nombre pipeline06-job y copiar demo06.jenkinsfile    

1. Credenciales:
    * Crear credenciales en jenkins del tipo "Secret Text": ApiKeyDemo
    Crear job como pipeline con el nombre pipeline07-job y copiar demo07.jenkinsfile  