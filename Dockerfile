# Stage 1: Build the Vite project using Node.js
FROM node:22-alpine3.19 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Serve the built files using Deno
FROM denoland/deno:alpine-2.0.0 AS production

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

# Copy the Deno-specific files
COPY api ./api
COPY deno.json ./deno.json

# Expose the port the app runs on
EXPOSE 8000

# Command to run the Deno server
CMD ["deno", "task", "dev:api"]
