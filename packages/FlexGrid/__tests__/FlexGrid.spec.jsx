import React from 'react'
import { mount, render } from 'enzyme'
import { Grid } from 'react-flexbox-grid'

import FlexGrid from '../FlexGrid'

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
      flexGrid: flexGrid.find(Grid),
      findColumn: index => flexGrid.find(`div#col-${index}`),
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

    expect(flexGrid).toMatchSelector(Grid)
  })

  it('is fluid by default', () => {
    const { flexGrid } = doMount()

    expect(flexGrid).toHaveProp('fluid', true)
  })

  it('should render all children related to Grid with no gutter', () => {
    const { findColumn, findRow } = doMount({ gutter: false })

    const col1 = findColumn(1)
    const col2 = findColumn(2)
    const row = findRow(1)

    expect(col1).toHaveClassName('gutterless')
    expect(col2).toHaveClassName('gutterless')
    expect(row).toHaveClassName('flexRow')
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

    expect(flexGrid).toHaveClassName('limitWidth')
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

    expect(flexGrid).not.toHaveClassName('limitWidth')
  })
})
