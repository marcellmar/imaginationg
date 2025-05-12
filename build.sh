#!/bin/bash

# Remove the file with spaces in the name
if [ -f "Landing Page Enhancements.tsx" ]; then
  rm "Landing Page Enhancements.tsx"
  echo "Removed file with spaces in the name"
fi

# Install dependencies
npm install

# Run the build
npm run build