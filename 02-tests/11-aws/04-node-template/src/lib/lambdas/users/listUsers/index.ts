import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

import { Lambdas } from '../../../../@types/lambdas';

export class ListUsersLambda extends lambda.Function {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    if (!props?.bucketName) throw new Error('Missing bucket name');

    const params: lambda.FunctionProps = {
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(30),
      handler: 'handler.handler',
      environment: {
        BUCKET_NAME: props?.bucketName,
      },
      code: lambda.Code.fromAsset('dist/lib/lambdas/users/listUsers'),
    };

    super(scope, 'ListUsersLambda', params);
  }
}
