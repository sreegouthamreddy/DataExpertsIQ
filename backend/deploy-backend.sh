#!/bin/bash

# Exit on any error
set -e

# Variables (Replace with your values)
AWS_PROFILE="default"
AWS_REGION="us-east-1"
ECR_REPO_NAME="dataexpertsiq-backend"
APP_RUNNER_ARN="arn:aws:apprunner:us-east-1:875789494394:service/dataexpertsiq-backend/8ca0691318ef437ea3adfdeaf740c7e8"
DOCKER_IMAGE_TAG="latest"

# Get AWS Account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text --profile $AWS_PROFILE)

# Define ECR URI
ECR_URI="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME"

# Step 1: Authenticate Docker to ECR
echo "Authenticating Docker to ECR..."
aws ecr get-login-password --region $AWS_REGION --profile $AWS_PROFILE | docker login --username AWS --password-stdin $ECR_URI

# Step 2: Build the Docker image
echo "Building Docker image..."
docker build -t $ECR_REPO_NAME .

# Step 3: Tag the Docker image
echo "Tagging Docker image..."
docker tag $ECR_REPO_NAME:latest $ECR_URI:$DOCKER_IMAGE_TAG

# Step 4: Push the Docker image to ECR
echo "Pushing Docker image to ECR..."
docker push $ECR_URI:$DOCKER_IMAGE_TAG

# Step 5: Deploy to App Runner
echo "Deploying to App Runner..."
aws apprunner start-deployment --service-arn $APP_RUNNER_ARN --profile $AWS_PROFILE

echo "Deployment initiated successfully. Check the AWS Console for status."