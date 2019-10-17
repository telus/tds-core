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
      undefined,
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

  it('should replace multiple anchor tags with Links', () => {
    const content =
      'To help us improve this website, we would love to hear your feedback. <a href="/feedback">Tell us what you think</a> <a href="telus.com">telus.com</a>.'
    const result = renderContent(content)
    expect(result).toMatchObject([
      'To help us improve this website, we would love to hear your feedback. ',
      undefined,
      <Link key="2" href="/feedback">
        Tell us what you think
      </Link>,
      ' ',
      undefined,
      <Link key="5" href="telus.com">
        telus.com
      </Link>,
      '.',
    ])
  })

  it('should use br tags', () => {
    const content =
      'To help us improve this website, <br /> we would love <br> to hear your <br/> feedback.'
    const result = renderContent(content)
    expect(result).toMatchObject([
      [
        'To help us improve this website, ',
        <br key="break-0-1" />,
        ' we would love ',
        <br key="break-0-3" />,
        ' to hear your ',
        <br key="break-0-5" />,
        ' feedback.',
      ],
    ])
  })
})
