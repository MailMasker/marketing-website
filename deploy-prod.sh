#!/bin/bash


rm -rf .cache

ACKEE_DOMAIN_ID=b79f0d27-bb42-4711-a8f2-58a666975d7e yarn build
aws-vault exec email-forwarder-prod aws s3 sync public/ s3://email-forwarder-www-prod