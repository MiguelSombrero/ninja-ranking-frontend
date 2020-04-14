FROM node:10

WORKDIR /app
COPY . /app

RUN rm -rf node_modules/ && \
    npm install

USER node

CMD npm start