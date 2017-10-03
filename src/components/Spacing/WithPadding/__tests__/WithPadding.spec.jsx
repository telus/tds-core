import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import WithPadding from '../WithPadding'

describe('WithPadding', () => {
  const defaultProps = {
    scale: 3,
  }

  const doShallow = (props = {}) =>
    shallow(
      <WithPadding {...defaultProps} {...props}>
        Some content
      </WithPadding>
    )

  const doRender = (props = {}) =>
    render(
      <WithPadding {...defaultProps} {...props}>
        Some content
      </WithPadding>
    )

  it('renders', () => {
    const withPadding = doRender()

    expect(toJson(withPadding)).toMatchSnapshot()
  })

  it('defaults to padding on all sides', () => {
    const withPadding = doShallow({ scale: 1 })

    expect(withPadding).toHaveClassName('allPadding-1')
  })

  it('can have padding', () => {
    const withPadding = doShallow({ location: 'horizontal', scale: 2 })

    expect(withPadding).toHaveClassName('horizontalPadding-2')
  })

  it('will add additional arbitrary class names', () => {
    const withPadding = doShallow({ dangerouslyAddClassName: 'a-class' })

    expect(withPadding).toHaveClassName('a-class')
  })

  it('passes additional attributes to the element', () => {
    const withPadding = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(withPadding).toHaveProp('id', 'the-id')
    expect(withPadding).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const withPadding = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(withPadding).not.toHaveProp('className', 'my-custom-class')
    expect(withPadding).not.toHaveProp('style')
  })
})
