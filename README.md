# Node.js + RabbitMQ Hello World

This app is just a demo of RabbitMQ possibilities. The app is implemented using Node.js

## Set up

In the root of this project create a `.env` file with following contents:
```
RABBITMQ_CONN_URL=path_to_your_rabbitmq_instance
```

## Running

Run both `npm run run:publisher` and `npm run run:consumer` commands to see the publish/consume process.

## Demo

![Demo](./demo/images/demo.png)