#!/bin/sh

mkdir -p dist/scss

cp scss/settings/_variables.scss dist/scss/
cp scss/utility/{_helpers,_mixins}.scss dist/scss/
