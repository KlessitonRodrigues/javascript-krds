import AWS from "aws-sdk";

const QueueUrl =
  "https://sqs.us-east-1.amazonaws.com/173531734150/TestQueue.fifo";

export const addMessage = () => {
  const SQSInstance = new AWS.SQS();
  const date = new Date();

  const timeString = date.toLocaleTimeString();
  const msg = JSON.stringify({
    data: `Test msg ${timeString}`,
    time: date.getTime(),
  });
  const payload: AWS.SQS.SendMessageRequest = {
    DelaySeconds: 0,
    MessageBody: msg,
    MessageGroupId: Date.now().toString(16),
    MessageDeduplicationId: Date.now().toString(16),
    QueueUrl,
  };

  SQSInstance.sendMessage(payload, (err, data) => {
    if (err) throw err;
    console.log("success sent", data);
  });
};

export const getMessages = () => {
  const SQSInstance = new AWS.SQS();

  const payload: AWS.SQS.ReceiveMessageRequest = {
    MaxNumberOfMessages: 10,
    WaitTimeSeconds: 5,
    QueueUrl,
  };

  SQSInstance.receiveMessage(payload, (err, data) => {
    if (err) throw err;
    console.log("success fetched", data);
  });
};

export const purgeMessages = () => {
  const SQSInstance = new AWS.SQS();

  const payload: AWS.SQS.ReceiveMessageRequest = {
    QueueUrl,
  };

  SQSInstance.purgeQueue(payload, (err, data) => {
    if (err) throw err;
    console.log("success cleaned", data);
  });
};
