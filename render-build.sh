#!/bin/bash

# Run the Next.js build
npm run build

# The static export is already in the 'out' directory
# No need to copy files since we'll serve directly from 'out'

echo "Build completed - static site is ready in the 'out' directory"
