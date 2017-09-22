import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import StandaloneIcon from '../StandaloneIcon'

describe('StandaloneIcon', () => {
  const defaultProps = {
    symbol: 'spyglass',
    a11yText: 'Some text for the screen readers.'
  }
  const doShallow = (props = {}) => shallow(<StandaloneIcon {...defaultProps} {...props} />)

  it('renders', () => {
    const icon = render(<StandaloneIcon symbol="spyglass" a11yText="Some screen reader text." />)
    expect(toJson(icon)).toMatchSnapshot()
  })

  it('passes attributes to the Icon component', () => {
    const icon = doShallow({ symbol: 'checkmark', variant: 'secondary', size: 16, id: 'the-icon' })

    expect(icon).toHaveProp('symbol', 'checkmark')
    expect(icon).toHaveProp('variant', 'secondary')
    expect(icon).toHaveProp('size', 16)
    expect(icon).toHaveProp('id', 'the-icon')
  })

  it('is accessible for screen readers', () => {
    const icon = doShallow({ a11yText: 'Some screen reader text' })

    expect(icon).not.toHaveProp('aria-hidden')
    expect(icon).toHaveProp('aria-label', 'Some screen reader text')
  })
})
