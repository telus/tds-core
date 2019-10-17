import React from 'react'
import Link from '@tds/core-link'

const generateLinks = content => {
  const linkRegex = /<\s*a([^>]*)>(.*?)<\s*\/\s*a>/g
  const attributeRegex = /(\w+)\s*=\s*((["'])(.*?)\3|(?=\s|\/>))/g

  const parts = content.split(linkRegex)
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

const generateBreaks = parts => {
  const breakRegex = /<br\s?\/*>/g

  const partsWithBreaks = parts

  for (let i = 0; i < partsWithBreaks.length; i += 1) {
    if (typeof partsWithBreaks[i] === 'string' && partsWithBreaks[i].search(breakRegex) !== -1) {
      const toSplit = partsWithBreaks[i].split(breakRegex)
      for (let x = 1; x < toSplit.length; x += 2) {
        toSplit.splice(x, 0, <br key={`break-${i}-${x}`} />)
      }
      partsWithBreaks[i] = toSplit
    }
  }
  return partsWithBreaks
}

const renderContent = content => {
  if (typeof content !== 'string') {
    return content
  }

  return generateBreaks(generateLinks(content))
}

export default renderContent
