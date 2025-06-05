// Create a simple placeholder OG image as data URL
const fs = require('fs');
const path = require('path');

// Create a 1x1 black pixel JPG as placeholder
const blackPixelJPG = Buffer.from('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=', 'base64');

// Save as og-default.jpg
fs.writeFileSync(
  path.join(__dirname, '../public/images/og-default.jpg'),
  blackPixelJPG
);

console.log('✅ Created placeholder og-default.jpg');
console.log('⚠️  Note: This is just a placeholder. You should create proper OG images with:');
console.log('   - Your brand design');
console.log('   - 1200x630px dimensions');
console.log('   - Clear text and visuals');
console.log('   - Tools like Canva, Figma, or any image editor');