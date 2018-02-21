#!/usr/bin/env node

// Usage: yarn scaffold <componentName>

/* eslint-disable no-console */

const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { resolve } = require('path')

const componentName = process.argv[2]

if (!componentName) {
  console.error('Usage: node scaffold.js <componentName>')
  process.exit(1)
}

const basePath = `packages/${componentName}`

const camelize = string => `${string.charAt(0).toLowerCase()}${string.slice(1)}`
const kebabize = string =>
  `${string
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()}`

const scaffold = (template, destination) => {
  const contents = readFileSync(resolve(`scripts/scaffolding/${template}`), 'utf8')
    .replace(/\$COMPONENT\$/g, componentName)
    .replace(/\$COMPONENT_CAMEL\$/g, camelize(componentName))
    .replace(/\$COMPONENT_SNAKE\$/g, kebabize(componentName))

  writeFileSync(resolve(`${basePath}/${destination}`), contents)

  console.log(`Created ${basePath}/${destination}`)
}

mkdirSync(resolve(basePath))
mkdirSync(resolve(`${basePath}/__tests__`))

scaffold('Component.jsx', `${componentName}.jsx`)
scaffold('Component.md', `${componentName}.md`)
scaffold('Component.spec.jsx', `__tests__/${componentName}.spec.jsx`)
scaffold('Component.modules.scss', `${componentName}.modules.scss`)
scaffold('index.cjs.js', 'index.cjs.js')
scaffold('index.es.js', 'index.es.js')
scaffold('package.json', 'package.json')
scaffold('rollup.config.js', 'rollup.config.js')
