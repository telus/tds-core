import React from 'react'
import { shallow } from 'enzyme'
import ReactTestUtils from 'react-dom/test-utils'

import Responsive from '../Responsive'
import { warn } from '../../../utils/warn'

jest.mock('../../../utils/warn')

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

  it('warns when mixWidth and maxWidth are not define', () => {
    const responsive = doShallow({})

    expect(responsive).not.toHaveProp('query')
    expect(warn).toHaveBeenCalled()
  })

  it('can define a media query for a particular viewport', () => {
    const responsive = doShallow({ minWidth: 'sm', maxWidth: 'md' })

    expect(responsive).toHaveProp('query', '(min-width: 576px) and (max-width: 767px)')
  })

  it('can have minWidth', () => {
    const responsive = doShallow()

    expect(responsive).toHaveProp('query', '(min-width: 576px)')
  })

  it('can have maxWidth', () => {
    const responsive = doShallow({ maxWidth: 'sm' })

    expect(responsive).toHaveProp('query', '(max-width: 575px)')
  })

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
