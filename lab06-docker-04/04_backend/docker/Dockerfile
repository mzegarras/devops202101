# Stage 0, "build-stage"
FROM node:10.15.2-alpine
WORKDIR /usr/src/app
COPY package*.json ./
ADD ./server/ ./
RUN npm install



FROM node:stretch-slim
WORKDIR /usr/src/app
COPY package.json ./
COPY --from=0 /usr/src/app ./
EXPOSE 3000
CMD npm start




