FROM node:10

WORKDIR /app
COPY . /app

RUN rm -rf node_modules/ && \
    npm install && \
    npm install -g serve && \
    npm run build

USER node

CMD serve -s build