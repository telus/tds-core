import React from 'react'
import Link from '@tds/core-link'

const renderContent = c => {
  const tagRegex = /<\s*a([^>]*)>(.*?)<\s*\/\s*a>/g
  const attributeRegex = /(\w+)\s*=\s*((["'])(.*?)\3|(?=\s|\/>))/g
  // split into attributes, and anchor text
  const parts = c.split(tagRegex)
  if (parts.length === 1) {
    return parts
  }
  // start with first anchor text, attributes will be in the previous part
  for (let i = 2; i < parts.length; i += 3) {
    const o = {}
    // get attributes from previous part
    const attributes = parts[i - 1].trim()

    // create object from attributes
    const matchedAttributes = attributes.match(attributeRegex)
    if (matchedAttributes) {
      matchedAttributes.forEach(attribute => {
        const split = attribute.split('=')
        o[split[0]] = split[1].substr(1, split[1].length - 2)
      })
    }
    // remove anchor attributes from parts
    parts[i - 1] = undefined
    // replace anchor text with Link in parts
    parts[i] = (
      <Link {...o} key={i}>
        {parts[i]}
      </Link>
    )
  }
  return parts
}

export default renderContent
