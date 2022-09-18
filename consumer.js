require('dotenv').config();
const amqplib = require('amqplib');

async function run() {
  const queueName = 'test_queue';

  const connection = await amqplib.connect(process.env.RABBITMQ_CONN_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName);

  channel.consume(queueName, (message) => {
    console.log('Received message: ', message.content.toString());
    channel.ack(message);
  });
}

run();