#!/usr/bin/env bash

set -euxo pipefail

rm -rf ./.terraform
terraform init
terraform plan -out=devicenator-ui.plan
terraform apply devicenator-ui.plan

rm devicenator-ui.plan
rm -rf ./.terraform
rm terraform.tfstate
rm terraform.tfstate.backup
