#!/bin/bash

# Set Variables
AWS_REGION="us-east-1"
S3_BUCKET_NAME="dataexpertsiq-frontend"
CLOUDFRONT_DISTRIBUTION_ID="E285T1FQHRQMJV"

# Build React App
echo "Building React App..."
npm install
npm run build

# Sync Build Directory to S3 Bucket
echo "Deploying to S3..."
aws s3 sync ./build s3://$S3_BUCKET_NAME --delete

# Invalidate CloudFront Cache
echo "Invalidating CloudFront Cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Deployment Complete!"
