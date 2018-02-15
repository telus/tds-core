import React from 'react'
import { shallow } from 'enzyme'

import Responsive from '../Responsive'
import { warn } from '../../../shared/utils/warn'

jest.mock('../../../shared/utils/warn')

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

  // TODO: Maybe this warning should not exist? What is you just want to query for screen vs print or something?
  it('warns when min width and max width are not defined', () => {
    doShallow({ minWidth: undefined, maxWidth: undefined })

    expect(warn).toHaveBeenCalled()
  })

  it('translates min and max width to pixel breakpoints', () => {
    const responsive = doShallow({ minWidth: 'sm', maxWidth: 'md' })

    expect(responsive).toHaveProp('query', { minWidth: 576, maxWidth: 767 })
  })

  it('does not generate a query with undefined min or max widths', () => {
    let responsive = doShallow({ minWidth: 'sm' })

    let query = responsive.props().query
    expect(query.hasOwnProperty('maxWidth')).toBeFalsy() // eslint-disable-line no-prototype-builtins

    responsive = doShallow({ maxWidth: 'sm' })

    query = responsive.props().query
    expect(query.hasOwnProperty('minWidth')).toBeFalsy() // eslint-disable-line no-prototype-builtins
  })

  it('accepts other media query characteristics', () => {
    const responsive = doShallow({ query: { screen: true, orientation: 'portrait' } })

    expect(responsive).toHaveProp(
      'query',
      expect.objectContaining({ screen: true, orientation: 'portrait' })
    )
  })

  it('allows overriding the min and max width with a query', () => {
    const responsive = doShallow({ query: { minWidth: 100, maxWidth: 2000 } })

    expect(responsive).toHaveProp('query', { minWidth: 100, maxWidth: 2000 })
  })

  it('passes additional attributes to the Media component', () => {
    const responsive = doShallow({ defaultMatches: false })

    expect(responsive).toHaveProp('defaultMatches', false)
  })
})
