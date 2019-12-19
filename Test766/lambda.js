let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    let data = await ddb.get({
        TableName: "Shop",
        Key: {
            Color: "1234"
        }
    }).promise();
    console.log(data);


    return { "message": "Successfully executed" };
};