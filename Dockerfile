# Build
FROM node:10.12.0-alpine

RUN apk add --update --no-cache build-base python3 && ln -sf python3 /usr/bin/python && \
    python3 -m ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools && \
    apk add build-base

WORKDIR /app

COPY . .

RUN npm run build

ENV NODE_VERSION 10.12.0
RUN apk add --no-cache tzdata
ENV TZ 'America/Sao_Paulo'
ENV NODE_ENV=PROD
ENV HOST=0.0.0.0
ENV PORT=8080

CMD ["npm", "run", "serve"]
