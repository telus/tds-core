import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Text from '../Text'

describe('Text', () => {
  const doShallow = props => (
    shallow(<Text {...props}>Some content</Text>)
  )

  it('renders', () => {
    const text = doShallow()

    expect(toJson(text)).toMatchSnapshot()
  })

  it('renders an HTML span tag', () => {
    const text = doShallow()

    expect(text).toHaveTagName('span')
  })

  it('can be bold', () => {
    let text = doShallow()
    expect(text).not.toHaveClassName('bold')

    text = doShallow({ bold: true })
    expect(text).toHaveClassName('bold')
  })

  it('can be sized', () => {
    let text = doShallow()
    expect(text).toHaveClassName('medium')

    text = doShallow({ size: 'small' })
    expect(text).toHaveClassName('small')
  })

  it('passes additional attributes to the span element', () => {
    const text = doShallow({ id: 'the-text' })

    expect(text).toHaveProp('id', 'the-text')
  })

  it('does not allow custom CSS', () => {
    const text = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(text).not.toHaveProp('className', 'my-custom-class')
    expect(text).not.toHaveProp('style')
  })
})
