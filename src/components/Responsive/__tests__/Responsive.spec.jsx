import React from 'react'
import { shallow } from 'enzyme'
import ReactTestUtils from 'react-dom/test-utils'

import Responsive from '../Responsive'

describe('Responsive', () => {
  const defaultProps = {
    minWidth: 'sm',
  }
  const defaultChildren = 'Some content'

  const doShallow = (props = defaultProps, children = defaultChildren) =>
    shallow(<Responsive {...props}>{children}</Responsive>)

  const doBrowserRender = (props = defaultProps, children = <div>Some children</div>) => {
    ReactTestUtils.renderIntoDocument(<Responsive {...props}>{children}</Responsive>)
  }

  it('renders', () => {
    const responsive = doShallow()

    expect(responsive).toMatchSnapshot()
  })

  it('does other things', () => {
    const responsive = doShallow()

    expect(responsive).toBePresent()
  })

  it('return children', () => {
    const responsive = doBrowserRender()

    ReactTestUtils.isElementOfType(responsive, 'div')
  })

  it.skip('can have minWidth', () => {})

  it.skip('can have maxWidth', () => {})

  it.skip('passes additional attributes to the element', () => {
    const responsive = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(responsive).toHaveProp('id', 'the-id')
    expect(responsive).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const responsive = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(responsive).not.toHaveProp('className', 'my-custom-class')
    expect(responsive).not.toHaveProp('style')
  })
})
