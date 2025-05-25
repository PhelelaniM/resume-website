#!/bin/bash

# Install serve if not already installed
npm install -g serve

# Start a static file server for the 'out' directory
npx serve -s out -p $PORT
