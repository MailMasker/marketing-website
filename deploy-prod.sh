#!/bin/bash

ACKEE_DOMAIN_ID=cd2cfea9-b22b-4df8-948c-31c0d854d921 gatsby build
aws-vault exec email-forwarder-prod aws s3 sync public/ s3://email-forwarder-www-prod
