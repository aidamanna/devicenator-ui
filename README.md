# Devicenator UI

## Infrastructure deploy in local environment
Steps to deploy the infrastructure for `devicenator-ui`
1. `$ cd infrastructure`
2. `$ ./apply.sh`

## Travis configuration for building and deploying code
Set the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` with the values for the AWS Travis user 
created, `travis-devicenator-ui`, when deploying the infrastructure.