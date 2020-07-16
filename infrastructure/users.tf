resource "aws_iam_user" "travis-devicenator-ui" {
  name = "travis-devicenator-ui"
}

resource "aws_iam_access_key" "travis-devicenator-ui" {
  user = aws_iam_user.travis-devicenator-ui.name
}

resource "aws_iam_user_policy" "deploy-website-policy" {
  name = "deploy-website"
  user = aws_iam_user.travis-devicenator-ui.name
  policy = data.aws_iam_policy_document.deploy-website-policy-document.json
}

data "aws_iam_policy_document" "deploy-website-policy-document" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListAllMyBuckets"
    ]
    resources = [
      "arn:aws:s3:::*"
    ]
  }
  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket",
      "s3:GetBucketLocation"
    ]
    resources = [
      "arn:aws:s3:::devicenator.com"
    ]
  }
  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:GetObjectAcl",
      "s3:DeleteObject",
      "s3:PutObjectAcl"
    ]
    resources = [
      "arn:aws:s3:::devicenator.com/*"
    ]
  }
}

resource "aws_iam_user_policy" "invalidate-cloudfront-cache-policy" {
  name = "invalidate-cloudfront-cache"
  user = aws_iam_user.travis-devicenator-ui.name
  policy = data.aws_iam_policy_document.invalidate-cloudfront-cache-policy-document.json
}

data "aws_iam_policy_document" "invalidate-cloudfront-cache-policy-document" {
  statement {
    effect = "Allow"
    actions = [
      "cloudfront:ListDistributions",
      "cloudfront:CreateInvalidation"
    ]
    resources = [
      "*"
    ]
  }
}

