FROM nginx:stable

ENV TZ=America/Lima

ADD ./dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
#CMD ["nginx", "-g", "daemon off;"]