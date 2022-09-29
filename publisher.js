require('dotenv').config();
const amqplib = require('amqplib');

async function run() {
  const queueName = 'test_queue';

  const connection = await amqplib.connect(process.env.RABBITMQ_CONN_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName);

  channel.sendToQueue(queueName, Buffer.from('Hello, World!'));

  console.log('Sent a message');

  connection.close();
}

run();