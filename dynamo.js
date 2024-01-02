const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  });

// Create a DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

// Specify the table name
const tableName = 'test';

// Define the message object
const message = {
  id: 'your-unique-id', // Replace with your unique identifier for the partition key
  message: 'Hello, DynamoDB!',
};

// Set the parameters for the put operation
const params = {
  TableName: tableName,
  Item: message,
};

// Perform the put operation
docClient.put(params, (err, data) => {
  if (err) {
    console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('PutItem succeeded:', JSON.stringify(data, null, 2));
  }
});
