ARG ARCH=
FROM ${ARCH}node:14.16.0-buster-slim AS builder

WORKDIR /app
COPY . .

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git ca-certificates \
        && apt-get -yqq install ssh
RUN mkdir /root/.ssh \
    && chmod 0700 /root/.ssh \
    && ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts
RUN npm install -g @nestjs/cli 
RUN yarn add --dev \
        babel-loader \
        @babel/core \
        @babel/preset-env \
        webpack 
RUN yarn && yarn build


FROM ${ARCH}node:14.16.0-buster-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        wait-for-it=0.0~git20180723-1 \
    && apt-get clean \
    && rm -fr /var/lib/apt/lists/*

COPY --chown=node:node --from=builder /app/bin /app/bin
COPY --chown=node:node --from=builder /app/dist /app/dist
COPY --chown=node:node --from=builder /app/node_modules /app/node_modules

WORKDIR /app
USER node

EXPOSE 7000
CMD ["node", "dist/main.js"]
