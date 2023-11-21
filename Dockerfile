# syntax=docker/dockerfile:1.4

FROM nginx:1.23.4-alpine-slim as nginx-spa

WORKDIR /app

COPY queuear.nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/apps/queuear /etc/share/nginx/html

EXPOSE 80
