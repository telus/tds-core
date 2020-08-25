import React from 'react'
import { mount, render } from 'enzyme'

import FlexGrid, { StyledGrid } from '../FlexGrid'

import mockMatchMedia from '../../../config/jest/__mocks__/matchMedia'

describe('FlexGrid', () => {
  const doMount = (props = {}) => {
    const flexGrid = mount(
      <FlexGrid {...props}>
        <FlexGrid.Row id="row-1">
          <FlexGrid.Col id="col-1">1st column content</FlexGrid.Col>
          <FlexGrid.Col id="col-2">2nd column content</FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    )

    return {
      flexGrid: flexGrid.find(StyledGrid),
      findStyledColumn: index => flexGrid.find(`StyledComponent#col-${index}`),
      findRow: index => flexGrid.find(`div#row-${index}`),
    }
  }

  it('renders', () => {
    const flexGrid = render(
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col>1st column content</FlexGrid.Col>
          <FlexGrid.Col>2nd column content</FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    )

    expect(flexGrid).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Grid component', () => {
    const { flexGrid } = doMount()

    expect(flexGrid).toMatchSelector(StyledGrid)
  })

  it('is limitWidth by default', () => {
    const { flexGrid } = doMount()

    expect(flexGrid.first()).toHaveProp('limitWidth', true)
  })

  it('should render all children related to Grid with no gutter', () => {
    const { findStyledColumn } = doMount({ gutter: false })

    const styledCol1 = findStyledColumn(1)
    const styledCol2 = findStyledColumn(2)

    expect(styledCol1.prop('gutter')).toEqual(false)
    expect(styledCol2.prop('gutter')).toEqual(false)
  })

  it('passes additional attributes to the element', () => {
    const { flexGrid } = doMount({
      id: 'the-id',
      'data-some-attr': 'some value',
    })

    expect(flexGrid).toHaveProp('id', 'the-id')
    expect(flexGrid).toHaveProp('data-some-attr', 'some value')
  })

  it('can have limited width at various viewport sizes', () => {
    mockMatchMedia(360)
    const { flexGrid } = doMount()

    expect(flexGrid).toMatchSnapshot()
  })

  it('supports responsive reversal', () => {
    const { flexGrid } = doMount({
      xsReverse: true,
      smReverse: true,
      mdReverse: true,
      lgReverse: false,
      xlReverse: true,
    })

    expect(flexGrid).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const { flexGrid } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(flexGrid).not.toHaveProp('className', 'my-custom-class')
    expect(flexGrid).not.toHaveProp('style', { color: 'hotpink' })
  })

  it('allows the limitWidth prop to be unset', () => {
    const { flexGrid } = doMount({
      limitWidth: false,
    })

    expect(flexGrid).toMatchSnapshot()
  })

  it('renders with no outside gutter', () => {
    const { flexGrid } = doMount({
      outsideGutter: false,
    })
    expect(flexGrid).toMatchSnapshot()
  })
})
