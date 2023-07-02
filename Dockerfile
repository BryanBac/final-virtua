FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
RUN npm run build

CMD ["npm", "start"]