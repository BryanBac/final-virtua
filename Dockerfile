FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN yarn install

COPY next.config.js ./next.config.js

CMD ["yarn", "dev"]
