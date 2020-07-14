resource "aws_s3_bucket" "devicenator-ui" {
  bucket = local.domain_name
  acl = "private"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "s3-bucket-policy" {
  bucket = aws_s3_bucket.devicenator-ui.id
  policy = data.aws_iam_policy_document.s3-bucket-policy-document.json
}

data "aws_iam_policy_document" "s3-bucket-policy-document" {
  statement {
    sid = "CloudFrontListBucket"
    effect = "Allow"
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
    actions = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${local.domain_name}"]
  }
  statement {
    sid = "CloudFrontGetObject"
    effect = "Allow"
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
    actions = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${local.domain_name}/*"]
  }
}
