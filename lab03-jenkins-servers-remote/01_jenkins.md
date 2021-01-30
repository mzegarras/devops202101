1. Analizar centos8/Dockerfile

1. Generar keys

    **ERROR**
    ```bash 
    ssh-keygen -f ./centos8/remote-key -t rsa
    ```

    **OK**
    ```bash
    ssh-keygen -f ./centos8/remote-key -t rsa -b 4096 -m PEM
    ```

1. Generar imagen
    ```bash
    docker-compose  -f docker-compose-v2.yaml build
    ```

1. Iniciar docker-compose con remote machine
    ```bash
    mkdir jenkins_home
    docker-compose  -f docker-compose-v2.yaml up -d
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    docker exec -it jenkins bash
    ```
1. Conectarse a máquina remota
    ```bash
    docker ps
    docker cp ./centos8/remote-key jenkins:/tmp
    docker exec -it jenkins bash
    chmod 600 /tmp/remote-key
    ssh -i /tmp/remote-key remote_user@remote_host
    ```

1. Instalar plugins
    1. Login
    1. Manage Jenkins
    1. Manage Plugins
    1. Clic Avialable
    1. Buscar Plugin: "ssh "


1. Configurar ssh
    1. Manage Jenkins
    1. Configure System
    1. Ir a la sección "SSH remote hosts"
    1. Clic en add
    1. Hostname: "remote-host (Definido en docker-compose-v2.yaml/services/remote_host/)" 

1. Crear credenciales
    1. Manage Jenkins
    1. Manage credentials
    1. Stores scope: "Jenkins"
    1. Clic "Global credentials"
    1. Clic en "Add credentials"
    1. "Kind": "SSH UserName with PrivateKey"
    1. Username: remote_user (Definido en centos8/Dockerfile)
    1. Private Key: remote-key (No usar el remote-key.pub)