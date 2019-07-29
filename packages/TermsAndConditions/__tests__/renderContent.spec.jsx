import React from 'react'
import Link from '@tds/core-link'
import renderContent from '../renderContent'

describe('renderContent', () => {
  it('works', () => {
    const content = 'Why choose TELUS'
    const result = renderContent(content)
    expect(result).toEqual(['Why choose TELUS'])
  })

  it('should replace anchor tags with Link', () => {
    const content =
      'To help us improve this website, we would love to hear your feedback. <a href="/feedback">Tell us what you think</a>.'
    const result = renderContent(content)
    expect(result).toMatchObject([
      'To help us improve this website, we would love to hear your feedback. ',
      <Link key="2" href="/feedback">
        Tell us what you think
      </Link>,
      '.',
    ])
  })

  it('should not replace strong tags', () => {
    const content = '<strong>Save $600 when you bundle Optik TV and Internet</strong>'
    const result = renderContent(content)
    expect(result).toEqual(['<strong>Save $600 when you bundle Optik TV and Internet</strong>'])
  })
})
