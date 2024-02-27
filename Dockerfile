FROM node:latest

COPY yarn.lock package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]