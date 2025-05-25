#!/bin/bash

# Run the Next.js build
npm run build

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy the entire .next directory to dist
cp -r .next/* dist/

# Copy the public directory to dist/static
mkdir -p dist/static
cp -r public/* dist/static/

echo "Build completed and files copied to dist directory for Render deployment"
