#!/bin/bash

# Create placeholder images for the IMAGINATION G landing page
# Note: In a real project, you would replace these with actual images

# Create directories if they don't exist
mkdir -p ../public/images

# List of placeholder images needed
placeholders=(
  "founder.jpg:300:300:Marcus Davis - Founder"
  "testimonial-1.jpg:64:64:Sarah Chen"
  "testimonial-2.jpg:64:64:Dana Washington"
  "testimonial-3.jpg:64:64:Marcus Rodriguez"
  "cheatsheet.jpg:600:400:5 Signals Cheat Sheet"
  "og-image.jpg:1200:630:IMAGINATION G"
  "favicon.ico:32:32:Favicon"
)

echo "This script would create placeholder images in a real environment."
echo "For a production site, replace these with actual images:"

for placeholder in "${placeholders[@]}"; do
  IFS=':' read -r filename width height description <<< "$placeholder"
  echo "../public/images/$filename - ${width}x${height} - $description"
done