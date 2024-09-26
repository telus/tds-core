#!/usr/bin/env sh

echo 'Warning: this repo only works with node.js v12.14.'
npm i
npm run build-docs:gitbook
npm run build-docs:styleguide
cp -R styleguide/dev guide/_book/components
