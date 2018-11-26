import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../Icon'

describe('Icon', () => {
  const defaultProps = {
    symbol: 'spyglass',
  }
  const doShallow = (props = {}) => shallow(<Icon {...defaultProps} {...props} />)

  it('renders', () => {
    const icon = doShallow()
    expect(icon).toMatchSnapshot()
  })

  it('renders an HTML i tag', () => {
    const icon = doShallow()

    expect(icon).toHaveDisplayName('i')
  })

  it('needs a symbol', () => {
    const icon = doShallow({ symbol: 'spyglass' })

    expect(icon).toHaveClassName('iconSpyglass')
  })

  it('supports variants', () => {
    const icon = doShallow({ variant: 'secondary' })

    expect(icon).toHaveClassName('secondary')
  })

  it('can be sized', () => {
    const icon = doShallow({ size: 16 })

    expect(icon).toHaveClassName('size16')
  })

  it('passes additional attributes to the i element', () => {
    const icon = doShallow({ id: 'the-icon', role: 'button' })

    expect(icon).toHaveProp('id', 'the-icon')
    expect(icon).toHaveProp('role', 'button')
  })

  it('does not allow custom CSS', () => {
    const icon = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(icon).not.toHaveProp('className', 'my-custom-class')
    expect(icon).not.toHaveProp('style')
  })
})
