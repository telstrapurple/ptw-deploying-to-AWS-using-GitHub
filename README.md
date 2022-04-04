# Purple Technology Workshops

This is a collection of Workshops run by Telstra Purple with the aim of sharing the vast wealth of knowledge we've accumulated over the years, working on amazing projects like [Airspeeder](https://purple.telstra.com/insights/case-studies/airspeeder), [Autonomous vehicles with FMG](https://www.fmgl.com.au/in-the-news/media-releases/2021/02/15/fortescue-deploys-autonomous-light-vehicles-at-chichester-hub), digital twin solutions for a number of high profile resource clients, financial software for agriculture, banking, health SaaS, you name it and we have probably done it.

## Deploying to AWS using GitHub

This repo is supporting the associate workshop and is comprised of 3 main pieces;

1. The file `oidc.yaml` contains all the necessary Cloud Formation to spin up an OIDC Identity Provider and associated IAM Role.
1. The file `.github/workflows/deploy.yaml` contains the GitHub action that authenticates to AWS via the OIDC Identity Provider and then deploys the CDK code to AWS.
1. Finally, the rest. The remaining code is primarily a result of running `cdk init` to generate some code. It's then been customised to create a simple API Gateway with 1 endpoint that returns `"Hello World"`.
