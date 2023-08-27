import AWS from "aws-sdk";
import { addMessage, getMessages, purgeMessages } from "./SQS";

process.env.AWS_ACCESS_KEY_ID = "";
process.env.AWS_SECRET_ACCESS_KEY = "";
process.env.AWS_DEFAULT_REGION = "";

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
});

addMessage();
getMessages();
// purgeMessages();
