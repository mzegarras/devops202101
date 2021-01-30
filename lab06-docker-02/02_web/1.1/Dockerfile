FROM nginx:stable

ENV TZ=America/Lima

#COPY /dist.tgz /dist.tgz
#ADD http://myfile.com/dist.tgz /dist.tgz
ADD /dist.tgz /dist.tgz
#RUN ls -lt /dist.tgz/dist
#RUN tar -xvf /opt/dist.tgz && \\
#RUN  cp /dist.tgz/dist/* /usr/share/nginx/html
RUN  mv /dist.tgz/dist/* /usr/share/nginx/html
#RUN ls -lt /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]