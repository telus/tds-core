import React from 'react'
import { shallow } from 'enzyme'

import Text from '../Text'

describe('Text', () => {
  const doShallow = props => shallow(<Text {...props}>Some content</Text>)

  it('renders', () => {
    const text = doShallow()

    expect(text).toMatchSnapshot()
  })

  it('renders a span with display: block if specified', () => {
    let text = doShallow()
<<<<<<< HEAD
    expect(text).toHaveDisplayName('span')

    text = doShallow({ block: true })
    expect(text).toHaveDisplayName('div')
=======
    expect(text).not.toHaveClassName('blockText')

    text = doShallow({ block: true })
    expect(text).toHaveClassName('blockText')
>>>>>>> 59624eaa... fix(core-text): modify block prop behaviour
  })

  it('can be bold', () => {
    let text = doShallow()
    expect(text).not.toHaveClassName('boldFont')

    text = doShallow({ bold: true })
    expect(text).toHaveClassName('boldFont')
  })

  it('can be inverted', () => {
    let text = doShallow()
    expect(text).not.toHaveClassName('invertedColor')
    expect(text).toHaveClassName('color')

    text = doShallow({ invert: true })
    expect(text).toHaveClassName('invertedColor')
    expect(text).not.toHaveClassName('color')
  })

  it('can be sized', () => {
    let text = doShallow()
    expect(text).toHaveClassName('base baseFont')

    text = doShallow({ size: 'small' })
    expect(text).toHaveClassName('small smallFont')
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
