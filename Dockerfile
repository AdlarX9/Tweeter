# Set up base image
FROM node:latest AS base
RUN npm install -g pnpm nodemon

# Web interface
FROM base AS web
WORKDIR /usr/local/tweeter/web
COPY ./web ./
RUN pnpm install
EXPOSE 5173
CMD ["pnpm", "run", "dev", "--host"]

# Express API
FROM base AS api
WORKDIR /usr/local/tweeter/api
COPY ./api ./
RUN npm install
EXPOSE 3001
CMD ["nodemon", "server"]