
1. Actualizar centos (opcional)
    ```bash
    sudo dnf update -y
    ```

1. Agregar Docker-CE repositorio
    ```console
    sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
    ```

1. Instalar última versión docker
    ```console
    sudo dnf install docker-ce --nobest -y
    ```
1. Iniciar docker cuando iniciar el SO
    ```console
    sudo systemctl start docker
    sudo systemctl enable docker
    ```
1. Verificar versión
    ```console
    docker --version
    docker ps
    id
    sudo usermod -aG docker $(whoami)
    sudo reboot
    docker run hello-world
    ```

    
1. Instalar docker-compose
    ```console
    sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    ```

1. Agregar permisos de ejecución
    ```console
    sudo chmod +x /usr/local/bin/docker-compose
    ```

1. Agregar acceso directo
    ```console
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    ```
1. Verificar versión
    ```console
    docker-compose --version
    ```

1. Instalar git
    ```console
    sudo dnf install git-all
    ```
    

1. Habilitar Firewall
        
    * Edit tags
        ```console
        gcloud compute instances add-tags server01 --tags xxxxa,bbbb12
        ```

    * Firewall rules
        ```console
        gcloud compute firewall-rules list
        ```

    * Create firewall rules
        ```console
        gcloud compute firewall-rules list
        ```

    * Create firewall rules
        ```console
        gcloud compute firewall-rules create serverci02 \
        --direction=INGRESS \
        --description="Allow incoming traffic CI servers Update" \
        --source-ranges="0.0.0.0/0" \
        --allow tcp:8080-8085,tcp:9090  \
        --target-tags allowhttp,allowprivaterdp
        ```

    * Update firewall rules
        ```console
        gcloud compute firewall-rules update serverci02 \
        --description="Allow incoming traffic CI servers" \
        --source-ranges="0.0.0.0/0" \
        --allow tcp:8080-8085,tcp:9090,tcp:80  \
        --target-tags allowhttp,allowprivaterdp
        ```
    
    * Server
        ```console
        sudo docker run -p 8080:80 nginx
        ```
