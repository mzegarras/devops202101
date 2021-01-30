

FROM openjdk:8-jdk-alpine
VOLUME /tmp

EXPOSE 8090

ADD ./Rest02-2.0-SNAPSHOT.jar app.jar


ENTRYPOINT ["java","-jar","app.jar"]
