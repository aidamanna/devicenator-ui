data "aws_route53_zone" "devicenator" {
  name = "devicenator.com"
}

resource "aws_route53_record" "devicenator" {
  zone_id = data.aws_route53_zone.devicenator.zone_id
  name    = "devicenator.com"
  type    = "A"

  alias {
    name    = aws_s3_bucket.devicenator-ui.website_domain
    zone_id = aws_s3_bucket.devicenator-ui.hosted_zone_id
    evaluate_target_health = false
  }
}
