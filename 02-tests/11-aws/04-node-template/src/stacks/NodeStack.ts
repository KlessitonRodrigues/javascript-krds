import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { Lambdas } from '../@types/lambdas';
import { TestApiGateway } from '../lib/gateway/testApi/index';
import { CreateUsersLambda } from '../lib/lambdas/users/createUsers/lambda';
import { ListUsersLambda } from '../lib/lambdas/users/listUsers/lambda';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambdas
    const lambdaProps: Lambdas.LambdasProps = {
      bucketName: 'bucket',
    };

    const listUsers = new ListUsersLambda(this, lambdaProps);
    const createUsers = new CreateUsersLambda(this, lambdaProps);

    // API Gateway
    const testApi = new TestApiGateway(this);

    // ...users/
    const usersApi = testApi.root.addResource('users');
    usersApi.addMethod('GET', new gateway.LambdaIntegration(listUsers));
    usersApi.addMethod('POST', new gateway.LambdaIntegration(createUsers));
  }
}
