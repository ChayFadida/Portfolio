# Use an official Node.js runtime as the base image
FROM node:14-alpine

ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_EMAILJS_USER_ID

ENV REACT_APP_EMAILJS_SERVICE_ID=$REACT_APP_EMAILJS_SERVICE_ID
ENV REACT_APP_EMAILJS_TEMPLATE_ID=$REACT_APP_EMAILJS_TEMPLATE_ID
ENV REACT_APP_EMAILJS_USER_ID=$REACT_APP_EMAILJS_USER_ID

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY yechezkePortfolio /app/
# Install the application's dependencies
RUN npm install --production

# Copy the production build folder to the container
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Command to start the application using serve
CMD ["serve", "-s", "build"]
