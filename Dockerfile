FROM httpd:latest AS server

FROM node:18 AS builder

ARG PUBLIC_URL=/
ARG NODE_ENV=production

WORKDIR /app
COPY . .

RUN npm ci

RUN npm run build

FROM server

COPY --from=builder /app/build/ /usr/local/apache2/htdocs

ENV NODE_ENV=production
ENV PUBLIC_URL=/

EXPOSE 80