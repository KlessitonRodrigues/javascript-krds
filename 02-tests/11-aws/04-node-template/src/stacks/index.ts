import * as cdk from 'aws-cdk-lib';

import '../config/dotenv';
import { NodeTemplateStack } from './NodeStack';
import { WebAppStack } from './WebStack';

const app = new cdk.App();

new WebAppStack(app);
new NodeTemplateStack(app);
