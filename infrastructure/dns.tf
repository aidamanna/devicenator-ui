data "aws_route53_zone" "devicenator" {
  name = "devicenator.com"
}

resource "aws_route53_record" "devicenator" {
  zone_id = data.aws_route53_zone.devicenator.zone_id
  name    = "devicenator.com"
  type    = "A"

  alias {
    name    = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id = local.cloudfront_zone_id
    evaluate_target_health = false
  }
}
