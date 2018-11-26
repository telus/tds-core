import React from 'react'
import { shallow } from 'enzyme'

import Paragraph from '../Paragraph'

describe('Paragraph', () => {
  const doShallow = props => shallow(<Paragraph {...props}>Some content</Paragraph>)

  it('renders', () => {
    const paragraph = doShallow()

    expect(paragraph).toMatchSnapshot()
  })

  it('renders an HTML p tag', () => {
    const paragraph = doShallow()

    expect(paragraph).toHaveDisplayName('p')
  })

  it('can be bold', () => {
    let paragraph = doShallow()
    expect(paragraph).not.toHaveClassName('boldFont')
    expect(paragraph).toHaveClassName('mediumFont')

    paragraph = doShallow({ bold: true })
    expect(paragraph).toHaveClassName('boldFont')
    expect(paragraph).not.toHaveClassName('mediumFont')
  })

  it('can be inverted', () => {
    let paragraph = doShallow()
    expect(paragraph).not.toHaveClassName('invertedColor')
    expect(paragraph).toHaveClassName('color')

    paragraph = doShallow({ invert: true })
    expect(paragraph).toHaveClassName('invertedColor')
    expect(paragraph).not.toHaveClassName('color')
  })

  it('can be aligned', () => {
    let paragraph = doShallow()
    expect(paragraph).toHaveClassName('leftAlign')

    paragraph = doShallow({ align: 'right' })
    expect(paragraph).toHaveClassName('rightAlign')
  })

  it('can be sized', () => {
    let paragraph = doShallow()
    expect(paragraph).toHaveClassName('medium mediumFont')

    paragraph = doShallow({ size: 'small' })
    expect(paragraph).toHaveClassName('small smallFont')
  })

  it('passes additional attributes to the p element', () => {
    const paragraph = doShallow({ id: 'the-paragraph' })

    expect(paragraph).toHaveProp('id', 'the-paragraph')
  })

  it('does not allow custom CSS', () => {
    const paragraph = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(paragraph).not.toHaveProp('className', 'my-custom-class')
    expect(paragraph).not.toHaveProp('style')
  })
})
