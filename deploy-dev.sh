#!/bin/bash

ACKEE_DOMAIN_ID=a824fbec-35c3-4f1a-a219-c7942043667e gatsby build
aws-vault exec email-forwarder-dev aws s3 sync public/ s3://email-forwarder-www-dev
