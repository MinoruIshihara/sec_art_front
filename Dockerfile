FROM node:22-bullseye

WORKDIR /app

COPY ./app/package*.json ./
RUN npm install

EXPOSE 3000