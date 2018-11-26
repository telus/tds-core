import React from 'react'
import { shallow, render } from 'enzyme'

import DimpleDivider from '../DimpleDivider'

describe('DimpleDivider', () => {
  const doShallow = (props = {}) => shallow(<DimpleDivider {...props} />)

  it('renders', () => {
    const dimpleDivider = render(<DimpleDivider />)

    expect(dimpleDivider).toMatchSnapshot()
  })

  it('is an HTML <hr> element', () => {
    const dimpleDivider = doShallow()

    expect(dimpleDivider).toHaveDisplayName('hr')
  })

  it('passes additional attributes to the element', () => {
    const dimpleDivider = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(dimpleDivider).toHaveProp('id', 'the-id')
    expect(dimpleDivider).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const dimpleDivider = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(dimpleDivider).not.toHaveProp('className', 'my-custom-class')
    expect(dimpleDivider).not.toHaveProp('style')
  })
})
