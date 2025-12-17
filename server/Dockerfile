# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy backend source code
COPY . .

# Expose backend port (change if needed)
EXPOSE 5000

# Start backend
CMD ["node", "index.js"]
