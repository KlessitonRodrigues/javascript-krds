import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { Lambdas } from '../@types/lambdas';
import { env } from '../config/dotenv';
import { TestApiGateway } from '../lib/gateway/testApi/index';
import { CreateUsersLambda } from '../lib/lambdas/users/createUsers/lambda';
import { ListUsersLambda } from '../lib/lambdas/users/listUsers/lambda';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaProps: Lambdas.LambdasProps = {
      MONGODB: env.MONGODB,
    };

    // Lambdas
    const listUsers = new ListUsersLambda(this, lambdaProps);
    const createUsers = new CreateUsersLambda(this, lambdaProps);

    // API Gateway
    const testApi = new TestApiGateway(this);

    // ...users/
    const usersApi = testApi.root.addResource('users');
    usersApi.addMethod('GET', new gateway.LambdaIntegration(listUsers));
    usersApi.addMethod('POST', new gateway.LambdaIntegration(createUsers));

    // ...users/{id}
    const userApi = usersApi.addResource('{id}');
    userApi.addMethod('GET', new gateway.LambdaIntegration(listUsers));
    userApi.addMethod('PATCH', new gateway.LambdaIntegration(createUsers));
    userApi.addMethod('DELETE', new gateway.LambdaIntegration(createUsers));
  }
}
