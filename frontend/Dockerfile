# 1. Use Node base image
FROM node:18

# 2. Set working directory
WORKDIR /app

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the project files
COPY . .

# 5. Build the app
RUN npm run build

# 6. Install a static file server
RUN npm install -g serve

# 7. Expose port used by serve (default: 3000)
EXPOSE 8080

# 8. Serve the built frontend
CMD ["serve", "-s", "dist", "-l", "8080"]