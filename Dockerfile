FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm run install

COPY next.config.js ./next.config.js

CMD ["npm", "start"]