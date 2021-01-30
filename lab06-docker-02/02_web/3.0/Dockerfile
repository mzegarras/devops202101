FROM nginx:stable

ENV TZ=America/Lima

RUN mkdir -p /data/website
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./dist /data/website
EXPOSE 9060

CMD ["nginx", "-g", "daemon off;"]


## nginx listen: 9060  **OK
## Directory: /data/website **OK
## Edit nginx.conf **OK
## Commands dockerfile
## docker build -t webdemo:3.0.1 .
## Commands docker run
## docker run -p 9090:9060 webdemo:3.0.1