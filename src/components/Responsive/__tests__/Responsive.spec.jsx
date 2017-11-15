import React from 'react'
import { shallow } from 'enzyme'

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

  it('renders', () => {
    const responsive = doShallow()

    expect(responsive).toMatchSnapshot()
  })

  it('warns when mixWidth and maxWidth are not defined', () => {
    const responsive = doShallow({})

    expect(responsive).toHaveProp('minWidth', undefined)
    expect(responsive).toHaveProp('maxWidth', undefined)
    expect(warn).toHaveBeenCalled()
  })

  it('can have a minWidth or maxWidth', () => {
    const responsive = doShallow({ minWidth: 'sm', maxWidth: 'md' })

    expect(responsive).toHaveProp('minWidth', 576)
    expect(responsive).toHaveProp('maxWidth', 767)
  })

  it('passes additional attributes to the element', () => {
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
