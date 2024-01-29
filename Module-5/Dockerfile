FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# VOLUME ["/app/feedback"] -> supposed to be Named Volume
# VOLUME ["/app/node_modules"] -> Anonymous Volume
# VOLUME ["/app/temp"] -> Anonymous Volume

CMD ["npm", "start"]

