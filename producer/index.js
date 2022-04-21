import { Kafka } from "kafkajs";


const kafka = new Kafka({
    clientId: 'my-app',
    brokerss:[ 'localhost:9092' , 'localhost:9093' , 'localhost:9094']
})


const producer = kafka.producer()
producer.connect()
    .then(res => {
        console.log("porducer server successfully started ");
    })
    .catch(err => {
        console.log('prodcure server failed ');
    })


const queueMessage = async ( order ) => {
    return await producer.send({
        topic: "test-topic-2",
    })
}