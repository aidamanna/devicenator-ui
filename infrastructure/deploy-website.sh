#!/usr/bin/env bash

set -euxo pipefail

aws s3 sync ./build s3://devicenator.com

aws configure set preview.cloudfront true

DISTRIBUTION_ID=$(aws cloudfront list-distributions \
  | jq -r '.DistributionList.Items[] | select(.Origins.Items[0].Id = "devicenator.com") | .Id')

INVALIDATION_ID=$(aws cloudfront create-invalidation \
                                  --distribution-id "${DISTRIBUTION_ID}" \
                                  --paths "/*" \
                                  | jq -r '.Invalidation.Id')

aws cloudfront wait invalidation-completed \
                      --distribution-id "${DISTRIBUTION_ID}" \
                      --id "${INVALIDATION_ID}"
