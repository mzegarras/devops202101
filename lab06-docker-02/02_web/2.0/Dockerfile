FROM nginx:stable

ENV TZ=America/Lima

RUN mkdir -p /data/www
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./dist /data/www
EXPOSE 8085

CMD ["nginx", "-g", "daemon off;"]


## nginx listen: 9060
## Directory: /data/website
## Edit nginx.conf
## Commands dockerfile
## Commands docker run