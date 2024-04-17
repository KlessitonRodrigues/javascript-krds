import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../../../@types/lambdas';

export class ListUsersLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    if (!props?.bucketName) throw new Error('Missing bucket name');

    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(30),
      handler: 'handler',
      entry: __dirname + '/index.ts',
      environment: {
        BUCKET_NAME: props?.bucketName,
      },
    };

    super(scope, 'ListUsersLambda', params);
  }
}
