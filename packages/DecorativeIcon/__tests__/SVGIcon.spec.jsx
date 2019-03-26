import React from 'react'
import { shallow, render } from 'enzyme'
import SVGIcon from '../SVGIcon'
import { BatteryCharging } from '../svgs'

describe('SVGIcon', () => {
  const defaultProps = {
    variant: 'default',
    size: 24,
  }
  const doShallow = (props = { symbol: 'artificialIntelligence' }) =>
    shallow(
      <SVGIcon {...defaultProps} {...props}>
        Some content
      </SVGIcon>
    )

  it('renders', () => {
    const icon = render(
      <SVGIcon variant="default" symbol="artificialIntelligence">
        Some content
      </SVGIcon>
    )

    expect(icon).toMatchSnapshot()
  })

  it('has variant set to `default`', () => {
    const icon = doShallow()
    expect(icon).toHaveClassName('svgVariantDefault')
  })

  it('has size set to 24', () => {
    const icon = doShallow()
    expect(icon).toHaveClassName('svgSize24')
  })

  it('is hidden from screen readers', () => {
    const icon = doShallow()
    expect(icon).toHaveProp('aria-hidden', 'true')
  })
})

describe('SVGIcon consumer', () => {
  const defaultProps = {
    variant: 'default',
  }
  const doShallow = (props = {}) => shallow(<BatteryCharging {...defaultProps} {...props} />)

  it('renders', () => {
    const icon = render(<BatteryCharging variant="default" />)

    expect(icon).toMatchSnapshot()
  })

  it('passes attributes to the Icon component', () => {
    const icon = doShallow({ variant: 'alternative', size: 16, id: 'the-icon' })

    expect(icon).toHaveProp('variant', 'alternative')
    expect(icon).toHaveProp('size', 16)
    expect(icon).toHaveProp('id', 'the-icon')
  })
})
