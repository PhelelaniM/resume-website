# Phelelani Mkhize - Resume Website

This is a static resume website built with Next.js that can be hosted on AWS S3 with a completely flat file structure (no subdirectories).

## Local Development

To run the website locally for development:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run the development server
npm run dev
```

The site will be available at http://localhost:3000 (or another port if 3000 is in use).

## Building for S3 Static Hosting (Flat File Structure)

This project includes a script to build and create a completely flat file structure for S3 hosting. The script ensures:

- **NO subdirectories or folders** - All files are in the root level
- Unique filenames to prevent conflicts
- PDF download functionality is preserved
- All assets are properly referenced

### Steps to build the flat static site:

1. Make sure all dependencies are installed:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Run the build script:
   ```bash
   ./build-static-site.sh
   ```

3. The completely flat static site will be available in the `s3-ready` directory.

### Deploying to AWS S3:

1. Create an S3 bucket in your AWS account.

2. Enable static website hosting for your bucket:
   - Go to your bucket properties
   - Enable "Static website hosting"
   - Set "Index document" to `index.html`
   - Set "Error document" to `index.html`

3. Upload all files from the `s3-ready` directory DIRECTLY to your S3 bucket root:
   ```bash
   aws s3 sync ./s3-ready/ s3://your-bucket-name/ --acl public-read
   ```
   
   **IMPORTANT**: Do not create any folders in S3. All files must be at the root level.

4. Set the bucket policy to allow public read access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

5. Your website should now be accessible at the S3 website endpoint: `http://your-bucket-name.s3-website-your-region.amazonaws.com`

## PDF Download Functionality

The website includes a "Download CV" button that allows visitors to download your resume as a PDF. The PDF file is stored directly in the flat file structure and doesn't require any server-side processing.

## File Structure

After running the build script, the `s3-ready` directory will contain:

- All HTML, CSS, and JavaScript files with unique names
- All image and asset files
- The PDF file for download (`Phelelani-Mkhize-CV.pdf`)
- A `landing.html` file that can be used as an alternative entry point
- A `file-mapping.txt` file that shows how original files were renamed

**NO SUBDIRECTORIES** - Everything is in a single flat structure for direct S3 hosting.
