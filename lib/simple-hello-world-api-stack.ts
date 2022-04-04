import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import path from 'path';

// TODO: Rename this
export class SimpleHelloWorldApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'HelloWorldApi');
    const lambda = new NodejsFunction(this, 'HelloWorldLambda', {
      entry: path.join(process.cwd(), 'lambda', 'hello-world', 'index.ts'),
    });
    const integration = new HttpLambdaIntegration('HelloWorldLambdaIntegration', lambda);

    api.addRoutes({
      path: '/',
      methods: [HttpMethod.ANY],
      integration: integration,
    });

    new CfnOutput(this, 'APIUrl', {
      value: api.url ?? 'Unknown',
      description: 'The HTTPS endpoint of the API',
      exportName: 'APIUrl'
    })
  }
}
