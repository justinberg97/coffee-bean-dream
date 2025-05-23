# Use a specific Node.js Long Term Support (LTS) version as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the root directory first to leverage Docker cache
# This assumes your main package.json is in the root of your project
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire 'server' directory into the container
COPY server/ server/
# Copy the main server.js file from the root to the app directory
COPY server.js .

# Expose the port your Node.js application listens on
# As per your server.js, this is 3000
EXPOSE 3000

# Define the command to run your application
# NOTE: may need to adjust this to show '../server.js'
# Had to run node as above; while in proj/server
CMD [ "node", "server.js" ]