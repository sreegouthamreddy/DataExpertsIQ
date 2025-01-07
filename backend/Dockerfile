# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port your app runs on (default is 3000 for Node.js apps)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
