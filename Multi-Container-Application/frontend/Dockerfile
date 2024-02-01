FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV CHOKIDAR_POLLING=true

CMD ["npm", "start"]