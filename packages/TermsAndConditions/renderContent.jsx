import React from 'react'
import Link from '@tds/core-link'

const renderContent = c => {
  const regex = /<\s*a([^>]*)>(.*?)<\s*\/\s*a>/g
  const attributeRegex = /(\w+)\s*=\s*((["'])(.*?)\3|(?=\s|\/>))/g
  // split into attributes, and anchor text
  const parts = c.split(regex)

  // start with first anchor text
  for (let i = 2; i < parts.length; i += 3) {
    const o = {}
    // get attributes from previous part
    const attributes = parts[i - 1].trim()

    // create object from attributes
    attributes.match(attributeRegex).forEach(attribute => {
      const split = attribute.split('=')
      o[split[0]] = split[1].substr(1, split[1].length - 2)
    })
    parts[i] = (
      <Link {...o} key={i}>
        {parts[i]}
      </Link>
    )
    // delete attriute part
    parts.splice(i - 1, 1)
  }
  return parts
}

export default renderContent
