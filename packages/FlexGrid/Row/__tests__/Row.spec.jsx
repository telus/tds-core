import React from 'react'
import { mount } from 'enzyme'

import FlexGrid from '../../FlexGrid'
import Row, { StyledRow } from '../Row'

describe('Row', () => {
  const doMount = (props = {}) => {
    const wrapper = mount(
      <FlexGrid>
        <Row {...props}>Some content</Row>
      </FlexGrid>
    )
    return wrapper.find(StyledRow)
  }

  it('renders', () => {
    const row = doMount()
    expect(row).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Row component', () => {
    const row = doMount()

    expect(row).toMatchSelector(StyledRow)
  })

  it('passes additional attributes to the react-flexbox-grid Row', () => {
    const row = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(row).toHaveProp('id', 'the-id')
    expect(row).toHaveProp('data-some-attr', 'some value')
  })

  describe('alignment', () => {
    it('can align columns horizontally to the start, center, or end', () => {
      let row = doMount({ horizontalAlign: 'start' })
      expect(row).toMatchSnapshot()

      row = doMount({ horizontalAlign: 'center' })
      expect(row).toMatchSnapshot()

      row = doMount({ horizontalAlign: 'end' })
      expect(row).toMatchSnapshot()
    })

    it('can align columns vertically to the top, middle, or bottom', () => {
      let row = doMount({ verticalAlign: 'top' })
      expect(row).toMatchSnapshot()

      row = doMount({ verticalAlign: 'middle' })
      expect(row).toMatchSnapshot()

      row = doMount({ verticalAlign: 'bottom' })
      expect(row).toMatchSnapshot()
    })

    it('can be horizontally and vertically aligned', () => {
      const row = doMount({ horizontalAlign: 'start', verticalAlign: 'top' })

      expect(row).toMatchSnapshot()
    })
  })

  it('can distribute columns around or between', () => {
    let row = doMount({ distribute: 'around' })
    expect(row).toMatchSnapshot()

    row = doMount({ distribute: 'between' })
    expect(row).toMatchSnapshot()
  })

  it('supports responsive reversal', () => {
    const row = doMount({
      xsReverse: true,
      smReverse: true,
      mdReverse: true,
      lgReverse: false,
      xlReverse: true,
    })

    expect(row).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const row = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(row).not.toHaveProp('className', 'my-custom-class')
    expect(row).not.toHaveProp('style', { color: 'hotpink' })
  })
})
