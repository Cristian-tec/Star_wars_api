FROM node:16

WORkDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8003

CMD [ "npm" , "start"]