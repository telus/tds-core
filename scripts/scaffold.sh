#!/bin/sh

# Usage: yarn scaffold -- <component-name>

COMPONENT="$1"

mkdir src/components/$COMPONENT
pushd src/components/$COMPONENT

mkdir __tests__
touch __tests__/$COMPONENT.spec.jsx

touch $COMPONENT.jsx
touch $COMPONENT.md
touch $COMPONENT.modules.scss
