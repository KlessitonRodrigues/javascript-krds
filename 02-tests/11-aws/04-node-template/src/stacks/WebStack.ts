import * as cdk from 'aws-cdk-lib';
import * as cloudFront from 'aws-cdk-lib/aws-cloudfront';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';

export class WebAppStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, 'WebAppStack', props);

    const distBucket = new s3.Bucket(this, 'WebAppTemplate', {
      websiteIndexDocument: 'index.html',
      autoDeleteObjects: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
      publicReadAccess: true,
    });

    const distribution = new cloudFront.CloudFrontWebDistribution(this, 'WebAppDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: distBucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    });

    new s3Deploy.BucketDeployment(this, 'WebAppTemplateFiles', {
      sources: [s3Deploy.Source.asset('dist')],
      destinationBucket: distBucket,
      distribution,
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
    });

    /*
    const zone = route53.HostedZone.fromLookup(this, 'WebAppZone', {
      domainName: '',
    });

    const record = new route53.ARecord(this, 'WebAppRecord', {
      zone,
      target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(dist)),
    });
    */
  }
}
