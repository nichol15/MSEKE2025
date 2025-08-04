# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Specify environment file (Azure handles this with App Settings, so this is only for local use)
# Uncomment the next line ONLY if you're copying your local .env for testing
# COPY .env .env

# Expose the port the app listens on
EXPOSE 80

# Start the app
CMD ["npm", "start"]