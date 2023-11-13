import { randomUUID } from "crypto";
import { Book1csv, Book2csv, Book3csv } from "./json/out.json";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export type CustomerSchema = {
  type: "customer";
  id: string;
  amlId: string;
  email: string;
  identityCheckerId: string;
  identityCheckerUrl: string;
  verified: boolean;
  formData: {
    firstName: string;
    lastName: string;
  };
};

const awsConfig = {
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
    sessionToken: "",
  },
};

const tableName = "";

const addCustomersToDB = async (customers: CustomerSchema) => {
  const client = new DynamoDBClient(awsConfig);
  const db = DynamoDBDocumentClient.from(client, {
    marshallOptions: {
      convertEmptyValues: false,
      removeUndefinedValues: true,
    },
  });

  return await db.send(
    new PutCommand({
      TableName: tableName,
      Item: customers,
    })
  );
};

export const uploadToDynamoDB = async () => {
  const csvData = [...Book1csv, ...Book2csv, ...Book3csv];
  const filteredData: typeof csvData = [];
  console.log("csv row", csvData.length);

  csvData.filter((row) => {
    if (!row.Email && !row.Reference) return false;
    if (filteredData.some((item) => item.Email === row.Email)) return false;

    const withSameEmail = csvData.filter((r) => r.Email === row.Email);
    if (withSameEmail.length <= 1) return filteredData.push(row);

    const completed = withSameEmail.filter((r) => r.Status === "Completed");
    return filteredData.push(completed.reverse()[0]);
  });

  const customers = filteredData.map<CustomerSchema>((data) => ({
    id: randomUUID(),
    amlId: randomUUID(),
    identityCheckerUrl: "",
    email: data.Email?.trim() || "",
    identityCheckerId: data.Reference || "",
    type: "customer",
    verified: true,
    formData: {
      firstName: data.FirstName || "",
      lastName: data.FamilyName || "",
    },
  }));

  console.log("customers", customers.length);

  for (const customer of customers) {
    const res = await addCustomersToDB(customer);
    console.log(customer.email, res.$metadata.httpStatusCode);
  }
};

uploadToDynamoDB().catch(console.error);
