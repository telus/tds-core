FROM node:6-alpine

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn"]
