# Stage 1: Build the Vite project using Deno
FROM denoland/deno:alpine-2.0.2 AS build

# Set the working directory
WORKDIR /app

# Copy the necessary files
COPY . .

# Install npm dependencies using Deno's npm integration
RUN deno install

# Enable the nodeModulesDir for npm lifecycle scripts
ENV DENO_NODE_MOD_DIR="auto"

# Run the Vite build using npm via Deno
RUN deno task build

# Stage 2: Serve the built files using Deno
FROM denoland/deno:alpine-2.0.2 AS production

# Set the working directory
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/public ./public
COPY --from=build /app/dist ./dist
COPY --from=build /app/api ./api
COPY --from=build /app/deno.json ./deno.json

# Expose the port the app runs on
EXPOSE 8000

# Command to run the Deno server
CMD ["deno", "task", "dev:api"]
