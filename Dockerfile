FROM node:latest

RUN mkdir /code
WORKDIR /code

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

CMD bin/hubot -a slack
