

FROM node:8

WORKDIR /home/node/app
COPY source/ ./

RUN ls -lt /home/node/app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
