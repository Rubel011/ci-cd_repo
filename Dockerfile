FROM node:18 AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

# COPY pnpm-lock.yaml pnpm-lock.yaml

# COPY .env .env

COPY index.js index.js

# COPY src/ src/

CMD [ "pnpm", "start" ]


