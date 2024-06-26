#!/bin/bash

# Build the project
npm run build

# Navigate into the build output directory
cd build

# Initialize Git, add files, and commit changes
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch on GitHub
git push -f https://github.com/twoj-nazwa-uzytkownika/possg3.git master:gh-pages

# Clean up - navigate back to the original directory and remove the build directory
cd ..
rm -rf build
