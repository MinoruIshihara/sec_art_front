FROM node:22-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./source /app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]