FROM node:16

COPY package*.json /app/

COPY . /app/

WORKDIR /app

RUN npm install

FROM node:lts-alpine

RUN npm install -g http-server

RUN npm install -g @vue/cli

COPY package*.json /app/

COPY . /app/

WORKDIR /app

RUN npm install

RUN npm run build
