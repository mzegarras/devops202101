# Lab06-docker-01

### Docker manager

1. Crear containers [nginx](https://hub.docker.com/_/nginx) 
    ```bash
    docker run -p 8008:80 nginx
    docker run -p 8080:80 nginx:latest
    docker run -p 8080:80 nginx:alpine
    ```

1. Crear containers [tomcat](https://hub.docker.com/_/tomcat) 
    ```bash
    docker run -p 8888:8080 tomcat:9-slim
    docker run -p 8888:8080 -d tomcat:9-slim
    ```
1. Crear containers [mysql](https://hub.docker.com/_/mysql) 
    ```bash
    docker run -e MYSQL_ROOT_PASSWORD=password -d mysql:8.0
    docker exec -it <<id>> /bin/sh
    mysql -h localhost -u root -p
    show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    +--------------------+
    docker run -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=ventas -d mysql:8.0
    docker exec -it <<id>> /bin/sh
    mysql -h localhost -u root -p
    show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | mysql              |
    | performance_schema |
    | sys                |
    | ventas             |
    +--------------------+
    printenv
    sudo docker rm eaf703346312 -f

    docker run -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=ventas -p 3307:3306 -d mysql:8.0
    ```

1. Crear containers [redis](https://hub.docker.com/_/redis) 
    ```bash
    docker run -d redis:alpine
    docker run -d -p 6379:6379 redis:alpine
    
    docker exec -it <<id>> /bin/sh
    redis-cli
    SET "limits:12345678" 100
    SET "limits:12345679" 100
    SET "limits:12345689" 100
    GET "limits:12345679"
    ```


1. Crear containers [mongo](https://hub.docker.com/_/mongo)  
    ```bash
    docker run -d mongo:latest
    docker exec -it <<id>> /bin/sh
    mongo
    show dbs
    use shop
    db.products.insertOne({name:"A book A",pice: 10})
    db.products.insertOne({name:"A book B",pice: 11,category:"a"})
    db.products.find()
    db.products.find().pretty()
    ```


1. Crear node [node](https://hub.docker.com/_/node)  
    ```bash
    docker run -it node:current-alpine3.11 /bin/sh
    docker exec -it <<id>> /bin/sh
    node
    a=1;
    b=2;
    console.log(a+b);
    process.exit(1);
    ```

1. Crear rabbitMQ [node](https://hub.docker.com/_/rabbitmq)  
    ```bash
    docker run -d --name some-rabbit rabbitmq:3
    docker run -d --name some-rabbit -p 8080:15672 rabbitmq:3-management
    guest/guest
    docker stop some-rabbit
    docker start some-rabbit
    docker run -d --name some-rabbit -p 8080:15672 rabbitmq:3-management
    docker run -d --name some-rabbit -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3-management
    ```
1. Stress tool [gatling](https://gatling.io/)  
    ```bash
    ```

1. Kali Linux [kali](https://www.kali.org/)  
    ```bash
    ```

1. Jenkins [Jenkins](https://hub.docker.com/_/jenkins)  
    ```bash
    docker run -p 8080:8080 jenkins:alpine
    ```

1. Microservice Clientes
    ```bash
    sudo docker login -u mzegarra
    docker run -d -p 8081:8080 mzegarra/msclientes:0.0.1
    curl http://localhost:8080/customers
    ```

1. Web LPSA
    ```bash
    docker run -p 8080:80 mzegarra/lpsa:1.0
    docker run -p 8081:80 mzegarra/lpsa:2.0
    ```

1. Listar containers
    ```bash
    docker ps
    docker ps -a
    docker ps -aq
    sudo docker rm $(sudo docker ps -aq) -f
    ```

1. Liberar recursos

    Docker proporciona un solo comando que eliminará cualquier recurso (imágenes, contenedores, volúmenes y redes) que estén pendientes (no asociados con un contenedor):

    ```bash
    docker system prune
    ```