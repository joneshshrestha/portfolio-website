#!/bin/bash
# Deployment script for GitHub Pages

# Build the site
echo "Building the site..."
npm run build

# Add CNAME file for custom domain
echo "Creating CNAME file..."
echo "joneshshrestha.com" > public/CNAME

# Create a temporary directory for deployment
echo "Setting up deployment..."
rm -rf temp-deploy
mkdir temp-deploy
cp -r public/. temp-deploy/
cd temp-deploy

# Initialize Git and push to gh-pages branch
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin $(cd .. && git config --get remote.origin.url)
git push -f origin gh-pages

# Clean up
cd ..
rm -rf temp-deploy
echo "Deployment complete!" 