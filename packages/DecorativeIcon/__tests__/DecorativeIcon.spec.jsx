import React from 'react'
import { shallow, render } from 'enzyme'

import DecorativeIcon from '../DecorativeIcon'

describe('DecorativeIcon', () => {
  const defaultProps = {
    symbol: 'spyglass',
  }
  const doShallow = (props = {}) => shallow(<DecorativeIcon {...defaultProps} {...props} />)

  it('renders', () => {
    const icon = render(<DecorativeIcon symbol="spyglass" />)

    expect(icon).toMatchSnapshot()
  })

  it('passes attributes to the Icon component', () => {
    const icon = doShallow({ symbol: 'checkmark', variant: 'secondary', size: 16, id: 'the-icon' })

    expect(icon).toHaveProp('symbol', 'checkmark')
    expect(icon).toHaveProp('variant', 'secondary')
    expect(icon).toHaveProp('size', 16)
    expect(icon).toHaveProp('id', 'the-icon')
  })

  it('is hidden from screen readers', () => {
    const icon = doShallow()

    expect(icon).toHaveProp('aria-hidden', 'true')
  })
})
