import React from 'react'
import { shallow } from 'enzyme'

import Responsive from '../ResponsiveReactMedia'
import { warn } from '../../../utils/warn'

jest.mock('../../../utils/warn')

describe('Responsive with react-media', () => {
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
    doShallow({ minWidth: undefined, maxWidth: undefined })

    expect(warn).toHaveBeenCalled()
  })

  it('can have a minWidth or maxWidth', () => {
    const responsive = doShallow({ minWidth: 'sm', maxWidth: 'md' })

    expect(responsive).toHaveProp('query', { minWidth: 576, maxWidth: 767 })
  })

  it('does not include undefined query properties', () => {
    let responsive = doShallow({ minWidth: 'sm' })

    let query = responsive.props().query
    expect(query.hasOwnProperty('maxWidth')).toBeFalsy() // eslint-disable-line no-prototype-builtins

    responsive = doShallow({ maxWidth: 'sm' })

    query = responsive.props().query
    expect(query.hasOwnProperty('minWidth')).toBeFalsy() // eslint-disable-line no-prototype-builtins
  })

  it('passes additional attributes to the Media component', () => {
    const responsive = doShallow({ defaultMatches: false })

    expect(responsive).toHaveProp('defaultMatches', false)
  })
})
