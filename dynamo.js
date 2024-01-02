const AWS = require('aws-sdk');

// Set the region for your DynamoDB table
AWS.config.update({ region: 'your-region' });

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
