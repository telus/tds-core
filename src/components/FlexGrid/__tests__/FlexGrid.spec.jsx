import React from 'react'
import { mount } from 'enzyme'
import { Grid } from 'react-flexbox-grid'

import Responsive from '../../Responsive/Responsive'
import FlexGrid from '../FlexGrid'

describe('FlexGrid', () => {
  const doMount = (props = {}) => {
    const wrapper = mount(<FlexGrid {...props}>Some grid stuff</FlexGrid>)
    return wrapper.find('Grid')
  }

  const doMountWithChildren = (props = {}) => {
    const wrapper = mount(
      <FlexGrid {...props}>
        <Responsive id="responsive" minWidth="md">
          {match => {
            return (
              <FlexGrid.Col>
                <div>HALF: {match}</div>
              </FlexGrid.Col>
            )
          }}
        </Responsive>
        <FlexGrid.Row>
          <FlexGrid.Col>HALF</FlexGrid.Col>
          <FlexGrid.Col>HALF</FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    )

    return wrapper.find('Grid')
  }
  it('renders', () => {
    const flexGrid = doMount()

    expect(flexGrid).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Grid component', () => {
    const flexGrid = doMount()

    expect(flexGrid).toMatchSelector(Grid)
  })

  it('is fluid by default', () => {
    const flexGrid = doMount()

    expect(flexGrid).toHaveProp('fluid', true)
  })

  it('should render all children related to Grid with no gutter', () => {
    const flexGrid = doMountWithChildren({ gutterless: true })

    const gutterless = { padding: 0, margin: 0 }
    const getElementStyleProp = (target, idx) => flexGrid.find(target).get(idx).props.style

    const col1 = getElementStyleProp('Col', 1)
    const col2 = getElementStyleProp('Col', 3)
    const col3 = getElementStyleProp('Col', 5)
    const row = getElementStyleProp('Row', 1)
    const NonRelatedElement = flexGrid.find('Responsive')

    expect(col1).toEqual(gutterless)
    expect(col2).toEqual(gutterless)
    expect(col3).toEqual(gutterless)
    expect(row).toEqual(gutterless)
    expect(NonRelatedElement).not.toEqual(gutterless)
  })

  it('passes additional attributes to the element', () => {
    const flexGrid = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(flexGrid).toHaveProp('id', 'the-id')
    expect(flexGrid).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const flexGrid = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(flexGrid).not.toHaveProp('className', 'my-custom-class')
    expect(flexGrid).not.toHaveProp('style', { color: 'hotpink' })
  })
})
