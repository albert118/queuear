# syntax=docker/dockerfile:1.4

FROM node:18-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs dist/apps/queuear ./

USER nextjs

EXPOSE 4200

ENV NODE_ENV production
ENV PORT 4200
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run start
