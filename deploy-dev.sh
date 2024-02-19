#!/bin/bash

rm -rf .cache

ACKEE_DOMAIN_ID=76d016b5-a0a7-44b2-b090-f19344833cf6 yarn build
aws s3 sync public/ s3://email-forwarder-www-dev