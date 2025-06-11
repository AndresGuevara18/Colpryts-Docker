FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for /wait-for
RUN chmod +x /wait-for

EXPOSE 3000

CMD ["/wait-for", "mysql:3306", "--", "node", "app.js"]