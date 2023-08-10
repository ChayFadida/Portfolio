# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY yechezkePortfolio /app/
COPY .env /app/
# Install the application's dependencies
RUN npm install --production

# Copy the production build folder to the container
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Command to start the application using serve
CMD ["serve", "-s", "build"]
