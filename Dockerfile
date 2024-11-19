
# Use an official Node.js image from the Docker registry
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port on which the API runs (3000)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
