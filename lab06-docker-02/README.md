# Lab05

### Creando imagenes

* Limpiar (opcional)
    ```bash
    docker system prune
    ```


* Imagen shell01
    ```bash
    docker build -t shell01 .
    docker run shell01
    ```

* Imagen shell02
    ```bash
    docker build -t shell02 -f Dockerfile02 .
    docker run shell02
    ```

* Imagen shell03
    ```bash
    docker build -t shell03 -f Dockerfile03 .
    docker run shell03
    ```

* Imagen shell04


    ```bash
    RUN chmod +x ./app.sh
    ```

    ```bash
    docker build -t shell04 -f Dockerfile04 .
    docker run -e NAME="sss" shell04
    ```

* Imagen shell05

    ```bash
    # Instalar prerequisitos
    #RUN apk add curl
    #RUN apk update && apk add curl
    ```

    ```bash
    docker build -t shell05 -f Dockerfile05 .
    docker run shell05
    ```


* Imagen web 1.0

    ```bash
     # Comprimir
    tar -czf dist.tgz ./dist
    tar -xvf dist.tgz
    ```

    ```bash
    docker build -t web01 .
    docker run -p 8080:8085 web01
    ```

* Lab web 2.0
    1. Escuchar por el puerto 8085
    1. Implementar un /health
    1. Directorio /data/www

* Java
    ```bash
    docker build -t java01 .
    docker run -p 8080:8085 web01
    ```

    ```bash
    curl http://localhost:8080/customers
    ```

* Node
    ```bash
    docker build -t node01 .
    docker run -p 8080:300 node01
    ```

    ```bash
    http://localhost:8080/
    http://localhost:8080/about
    ```

* Netcore
    ```bash
    docker build -t netcore01 .
    docker run -p 8080:80 netcore01
    ```

    ```bash
    curl http://localhost:8080/WeatherForecast
    ```


|Command    |Descripcion|Obligatorio|
|-----------|-----------|-----------|
|FROM       |Imagen base para construir la imagen|SI|
|CMD	    |Ejecuta el comando que inicia el container|SI|
|ENTRYPOINT |Ejecuta el comando que inicia el container|SI|
|MAINTAINER |Quien mantiene le Dockerfile|SI
|ENV |Definir variable de entorno|NO
|RUN |Ejecuta un comando y graba en resultado|NO
|ADD |Copias archivos a la imagen|NO
|EXPOSE|Abre puerto para abrir el container|NO
|WORKDIR|Directorio de trabajo|NO

1. CMD echo “Hello World” (shell estilo)
1. CMD ["echo", "Hello World"] (exec estilo)
1. ENTRYPOINT echo "Hello World" (shell estilo)
1. ENTRYPOINT ["echo", "Hello World"] (exec estilo)



apt-get update
apt-get install -y curl



sudo apt-get install -y curl
sudo docker run -it ubuntu /bin/sh