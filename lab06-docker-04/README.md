1. Crear containers 1

    ```bash
    docker run -d -p 8080:80 nginx:alpine
    docker run -d -p 8081:80 nginx:alpine
    docker run -d -p 8082:80 nginx:alpine
    docker run -d -p 8083:80 nginx:alpine
    ```

1. Crear containers 2

    ```
    docker run -d nginx
    docker run -d -p 8080:80 nginx
    docker run -p 8086:80 nginx:pipeline
    docker run -p 8087:80 nginx:latest
    docker run -d -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:5.7
    ```

1. Listar containers
    ```
    docker ps -a
    docker ps -aq
    ```

1. Iniciar y detener containers
    ```
    docker stop a1051285c4ab
    docker start a1051285c4ab
    ```

1. Eliminar containers
    ```
    docker rm a1051285c4ab -f
    ```


1. Mongo - mongo-express
    ```
    docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=root \
        -e MONGO_INITDB_ROOT_PASSWORD=pwd1234 \
        -e MONGO_INITDB_DATABASE=shop \
        -d mongo

    docker run --name mongo-express \
        -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
        -e ME_CONFIG_MONGODB_ADMINPASSWORD=pwd1234 \
        -e ME_CONFIG_MONGODB_ENABLE_ADMIN=true \
        -p 8081:8081 \
        --link mongodb:mongo \
        -d mongo-express
    ```

1. Wordpress
    ```
    docker run --name mysql01 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=Password1234 -d mysql

    docker run --name wordpress01 --link mysql01 -p 8080:80 -e WORDPRESS_DB_HOST=mysql01:3306 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=Password1234 -e WORDPRESS_DB_NAME=wordpress -d wordpress
    ```


1. Docker-compose 

* [Official documentation](https://docs.docker.com/compose/compose-file/)
  

    ```bash
    docker run -d -p 8080:80 nginx:alpine
    docker run -d -p 8081:80 nginx:alpine
    ```

    ```YAML
    version: '3.8'
    services:
      nginx:
        image: nginx:alpine
        ports:
          - 8080:80
    ```

    ```YAML
    version: '3.8'
    services:
      nginxa:
        image: nginx:alpine
        ports:
          - 8080:80
      nginxb:
        image: nginx:alpine
        ports:
          - 8081:80          
    ```

    ```sh
    docker-compose up
    docker-compose up -d

    docker-compose logs
    docker-compose ps


    docker-compose down
    docker-compose up -d


    docker-compose -f docker-compose-00.yaml up -d

    ```

1. Reto

    ```sh
    docker run -d -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:5.7
    ```

    ```YAML
    version: '3.8'
    services:
      db:
        image: mysql:5.7
        ports:
          - 3306:3306
        environment:
          MYSQL_ROOT_PASSWORD: my-secret-pw          
    ```    


1. Docker-compose Mysql

    * [restart](https://docs.docker.com/compose/compose-file/#restart)
    * restart: "no"
    * restart: always
    * restart: on-failure
    * restart: unless-stopped

    ```shell
    df -h
    docker system prune --volumes -f
    restart docker
    ```

    ```YAML
    version: '3.8'
    services:
      db:
        image: mysql:5.7
        restart: always
        volumes:
          - db_data:/var/lib/mysql
        environment:
          MYSQL_ROOT_PASSWORD: passroot
          MYSQL_DATABASE: db
          MYSQL_USER: userapp
          MYSQL_PASSWORD: passapp
    volumes:
        db_data: {}
    ``` 


1. Docker-compose wordpress - mysql


    ```YAML
    version: '3.8'
    services:
      db01:
        image: mysql:5.7
        volumes:
          - db_data:/var/lib/mysql
        restart: always 
        environment:
          MYSQL_ROOT_PASSWORD: somewordpress
          MYSQL_DATABASE: wordpress
          MYSQL_USER: wordpress
          MYSQL_PASSWORD: wordpress
      wordpress:
        depends_on:
          - db01
        image: wordpress:latest
        ports:
          - "8000:80"
        restart: always
        environment:
          WORDPRESS_DB_HOST: db01:3306
          WORDPRESS_DB_USER: wordpress
          WORDPRESS_DB_PASSWORD: wordpress
          WORDPRESS_DB_NAME: wordpress
    volumes:
        db_data: {}
    ``` 


1. Docker-compose Mongo

    ```YAML
    version: '3.8'
    services:
      mongo:
        image: mongo
        #container_name: mongo
        restart: always
        ports:
          - 27017:27017
        environment:
          MONGO_INITDB_ROOT_USERNAME: root
          MONGO_INITDB_ROOT_PASSWORD: "pwd123456!"
          MONGO_INITDB_DATABASE: interfaces
    ``` 


  
  
1. Docker-compose Mongo

    ```YAML
    version: '3.8'
    services:
      mongo:
        image: mongo
        #container_name: mongo
        restart: always
        ports:
          - 27017:27017
        environment:
          MONGO_INITDB_ROOT_USERNAME: root
          MONGO_INITDB_ROOT_PASSWORD: "pwd123456!"
          MONGO_INITDB_DATABASE: interfaces
    ``` 

1. Docker-compose Mongo - MongoExpress

    ```YAML
    version: '3.8'
    services:
      mongo-express:
        image: mongo-express
        restart: always
        ports:
          - 8081:8081
        environment:
          ME_CONFIG_MONGODB_ADMINUSERNAME: root
          ME_CONFIG_MONGODB_ADMINPASSWORD: "pwd123456!"
          ME_CONFIG_MONGODB_SERVER: mongo01
        depends_on:
          - mongo   
      mongo:
        image: mongo
        container_name: mongo01
        restart: always
        ports:
          - 27017:27017
        environment:
          MONGO_INITDB_ROOT_USERNAME: root
          MONGO_INITDB_ROOT_PASSWORD: "pwd123456!"
          MONGO_INITDB_DATABASE: interfaces
    ```      