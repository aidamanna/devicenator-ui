resource "aws_iam_user" "travis-devicenator-ui" {
  name = "travis-devicenator-ui"
}

resource "aws_iam_access_key" "travis-devicenator-ui" {
  user = aws_iam_user.travis-devicenator-ui.name
}

resource "aws_iam_user_policy" "upload-website-to-s3-policy" {
  name = "upload-website-to-s3"
  user = aws_iam_user.travis-devicenator-ui.name
  policy = data.aws_iam_policy_document.upload-website-to-s3-policy-document.json
}

data "aws_iam_policy_document" "upload-website-to-s3-policy-document" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket"
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
      "s3:DeleteObject"
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
      "cloudfront:CreateInvalidation",
      "cloudfront:GetInvalidation"
    ]
    resources = [
      "*"
    ]
  }
}

