#!/bin/sh

# Strategy:
# Step 1. Build gitbook and styleguidist in parallel for speed
# Step 2. Copy gitbook into build/${ENV}
# Step 3. Copy styleguidist into build/${ENV}/components

# 1
npm run ci:build-docs

mkdir -p build/staging
mkdir -p build/production

# 2
cp -R guide/_book/* build/staging
cp -R guide/_book/* build/production

# 3
cp -R styleguide/staging/ build/staging/components
cp -R styleguide/production/ build/production/components
