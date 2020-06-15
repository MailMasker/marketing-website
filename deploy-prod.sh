gatsby build
aws-vault exec email-forwarder-prod aws s3 sync public/ s3://email-forwarder-www-prod
