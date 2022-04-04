#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleHelloWorldApiStack } from '../lib/simple-hello-world-api-stack';

const app = new cdk.App();
new SimpleHelloWorldApiStack(app, 'SimpleHelloWorldApiStack');
