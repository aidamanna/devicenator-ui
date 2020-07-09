terraform {
  backend "s3" {
    encrypt = true
    bucket = "devicenator-state-bucket"
    profile = "devicenator"
    region = "eu-west-1"
    key = "devicenator-ui-terraform.tfstate"
    dynamodb_table = "devicentator-state-lock"
  }
}

provider "aws" {
  profile = "devicenator"
  region  = local.region
}
