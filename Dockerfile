FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN yarn install

COPY next.config.js ./next.config.js
EXPOSE 3000
CMD ["yarn", "dev"]
