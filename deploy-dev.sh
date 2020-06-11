gatsby build
aws-vault exec email-forwarder-dev aws s3 sync public/ s3://email-forwarder-www-dev
