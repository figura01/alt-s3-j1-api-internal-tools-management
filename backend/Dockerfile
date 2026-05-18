FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x start.sh

RUN npx prisma generate

EXPOSE 3000

CMD ["./start.sh"]