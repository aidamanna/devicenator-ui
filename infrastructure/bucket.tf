resource "aws_s3_bucket" "devicenator-ui" {
  bucket = "devicenator.com"
  acl = "public-read"

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
    sid = "PublicReadGetObject"
    effect = "Allow"
    principals {
      identifiers = [
        "*"
      ]
      type = "*"
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::devicenator.com/*"
    ]
  }
}
