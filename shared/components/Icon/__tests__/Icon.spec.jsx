import React from 'react'
import { shallow } from 'enzyme'

import { colorIconSecondary } from '@tds/core-colours'

import Icon, { StyledIcon } from '../Icon'

describe('Icon', () => {
  const defaultProps = {
    symbol: 'spyglass',
  }
  const doShallow = (props = {}) => shallow(<Icon {...defaultProps} {...props} />)
  const doShallowStyled = (props = {}) => shallow(<StyledIcon {...defaultProps} {...props} />)

  it('renders', () => {
    const icon = doShallow({ symbol: 'spyglass' })
    expect(icon).toMatchSnapshot()
  })

  it('supports variants', () => {
    const icon = doShallowStyled({ variant: 'secondary' })

    expect(icon).toHaveStyleRule('color', colorIconSecondary)
  })

  it('can be sized', () => {
    const icon = doShallowStyled({ iSize: 16 })

    expect(icon).toHaveStyleRule('font-size', '1rem')
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
