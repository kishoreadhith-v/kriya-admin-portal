FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

RUN yarn run watch-tw

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]