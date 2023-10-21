FROM node:16

WORkDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8002

CMD [ "npm" , "start"]