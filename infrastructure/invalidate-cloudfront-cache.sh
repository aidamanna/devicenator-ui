#!/usr/bin/env bash

set -euo pipefail

aws configure set preview.cloudfront true --profile devicenator

DISTRIBUTION_ID=$(aws cloudfront list-distributions \
  --profile devicenator \
  | jq -r '.DistributionList.Items[] | select(.Origins.Items[0].Id = "devicenator.com") | .Id')

INVALIDATION_ID=$(aws cloudfront create-invalidation \
                                  --distribution-id "${DISTRIBUTION_ID}" \
                                  --paths "/*" \
                                  --profile devicenator \
                                  | jq -r '.Invalidation.Id')

aws cloudfront wait invalidation-completed \
                      --distribution-id "${DISTRIBUTION_ID}" \
                      --id "${INVALIDATION_ID}" \
                      --profile devicenator
