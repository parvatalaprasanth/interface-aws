const AWS = require('aws-sdk');


console.log(process.env)

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

// Create an SQS instance with VPC endpoint
const sqs = new AWS.SQS({
    //endpoint: 'https://sqs.vpce.YOUR_VPC_ENDPOINT_ID.vpce-svc-XXXXXXXXXXXXXXXXX.region.vpce.amazonaws.com',
  });
  
  const params = {
    MessageBody: 'open message endpoint', // Replace with your actual message
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/155153302035/poc', // Replace with your actual SQS queue URL
  };
  
  // Send the message to the specified SQS queue
  sqs.sendMessage(params, (err, data) => {
    if (err) {
      console.error('Error sending message to SQS:', err);
    } else {
      console.log('Message sent successfully. MessageId:', data.MessageId);
    }
  });

//   const cloudwatchlogs = new AWS.CloudWatchLogs({
//     endpoint
//   });
  