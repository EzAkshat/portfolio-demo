const fs = require('node:fs');

fs.mkdirSync('dist', { recursive: true });

fs.writeFileSync(
  'dist/index.html',
  '<!doctype html><html><body><h1>Akshat Portfolio — Version 3</h1></body></html>',
);

console.log('Static site built successfully.');
