#!/bin/bash

gpg --output signed-message.sig --clearsign message-to-sign.txt
cat header.txt > '../static/canary.txt'
cat signed-message.sig >> '../static/canary.txt'

echo '\n\nVerifying canary.txt'
gpg --verify ../static/canary.txt
