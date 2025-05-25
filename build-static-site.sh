#!/bin/bash

# Build the Next.js static site
echo "Building Next.js static site..."
npm run build

# Create a directory for the completely flat site (no subdirectories)
echo "Creating completely flat site directory..."
mkdir -p s3-ready

# Copy all files from the dist directory to the s3-ready directory with completely flat structure
echo "Copying and flattening ALL files..."
find ./dist -type f | while read -r file; do
  # Get just the filename without any path
  filename=$(basename "$file")
  
  # Handle duplicate filenames by adding a unique identifier
  if [ -f "./s3-ready/$filename" ]; then
    # Extract file extension and name
    extension="${filename##*.}"
    name="${filename%.*}"
    
    # Create a unique hash based on the file path
    hash=$(echo "$file" | md5 -q | cut -c1-8)
    
    # Create new unique filename
    filename="${name}-${hash}.${extension}"
  fi
  
  # Copy the file to the flat directory
  cp "$file" "./s3-ready/$filename"
  echo "Copied: $file -> ./s3-ready/$filename"
done

# Copy the PDF file to the s3-ready directory
echo "Copying PDF file..."
cp "./public/Phelelani-Mkhize-CV.pdf" "./s3-ready/Phelelani-Mkhize-CV.pdf"

# Copy any other important files from public directory
echo "Copying public files..."
find ./public -type f | while read -r file; do
  filename=$(basename "$file")
  # Skip if we already copied the PDF
  if [ "$filename" != "Phelelani-Mkhize-CV.pdf" ]; then
    cp "$file" "./s3-ready/$filename"
    echo "Copied public file: $file -> ./s3-ready/$filename"
  fi
done

# Copy our custom index file
cp "./flat-site-index.html" "./s3-ready/landing.html"

# Create a mapping file for reference
echo "Creating file mapping for reference..."
echo "ORIGINAL PATH -> FLATTENED FILENAME" > ./s3-ready/file-mapping.txt
find ./dist -type f | while read -r file; do
  orig_filename=$(basename "$file")
  flat_filename="$orig_filename"
  
  # Simple check if files are different by comparing their paths
  if [ -f "./s3-ready/$orig_filename" ] && [ "./s3-ready/$orig_filename" != "$file" ]; then
    extension="${orig_filename##*.}"
    name="${orig_filename%.*}"
    hash=$(echo "$file" | md5 -q | cut -c1-8)
    flat_filename="${name}-${hash}.${extension}"
  fi
  
  echo "$file -> $flat_filename" >> ./s3-ready/file-mapping.txt
done

echo "=================================================="
echo "COMPLETE! Your site is ready for S3 hosting."
echo "=================================================="
echo "All files have been flattened with NO subdirectories in the 's3-ready' folder."
echo "Upload ALL files from the 's3-ready' directory directly to your S3 bucket root."
echo "Set 'index.html' as your index document in S3 static website hosting settings."
echo "=================================================="
