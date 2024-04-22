import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../../../@types/lambdas';

export class ListUsersLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    const { MONGODB } = props;
    if (!MONGODB) throw new Error('Missing Mongo uri');
    if (MONGODB?.includes('local')) throw new Error('Deploying local Mongo uri');

    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(30),
      handler: 'handler',
      entry: __dirname + '/index.ts',
      environment: {
        MONGODB,
      },
      logRetention: cdk.aws_logs.RetentionDays.THREE_DAYS,
    };

    super(scope, 'ListUsersLambda', params);
  }
}
