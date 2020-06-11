gatsby build
aws-vault exec email-forwarder-prod aws s3 sync build/ s3://email-forwarder-www-prod
