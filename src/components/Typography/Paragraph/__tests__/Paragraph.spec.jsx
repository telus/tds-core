import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Paragraph from '../Paragraph'

describe('Paragraph', () => {
  const doShallow = props => (
    shallow(<Paragraph {...props}>Some content</Paragraph>)
  )

  it('renders', () => {
    const paragraph = doShallow()

    expect(toJson(paragraph)).toMatchSnapshot()
  })

  it('renders an HTML p tag', () => {
    const paragraph = doShallow()

    expect(paragraph).toHaveTagName('p')
  })

  it('can be bold', () => {
    let paragraph = doShallow()
    expect(paragraph).not.toHaveClassName('bold')

    paragraph = doShallow({ bold: true })
    expect(paragraph).toHaveClassName('bold')
  })

  it('can be sized', () => {
    let paragraph = doShallow()
    expect(paragraph).toHaveClassName('medium')

    paragraph = doShallow({ size: 'small' })
    expect(paragraph).toHaveClassName('small')
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
