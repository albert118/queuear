# syntax=docker/dockerfile:1.4

FROM node:18-alpine as dependencies

WORKDIR /usr/src/app

RUN apk add --no-cache --update python3 make g++ && rm -rf /var/cache/apk/*
COPY package.json ./
RUN npm install --only=production

FROM docker.io/node:lts-alpine as runner

RUN apk add --no-cache dumb-init

ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/app

COPY --from=dependencies /usr/src/app/node_modules ./node_modules

COPY ./ ./
RUN chown -R node:node .
USER node

EXPOSE 80

CMD ["dumb-init", "npm", "start"]