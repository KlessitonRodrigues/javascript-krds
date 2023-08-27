import { CfnParameter } from "aws-cdk-lib/aws-ssm";

export const getSMSParameterValue = () => {
  const client = new CfnParameter(this, "test", {
    value: "testing",
    type: "string",
    name: "openAI",
  });
};
