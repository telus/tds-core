import React from 'react'
import { mount } from 'enzyme'
import { Row as ReactFlexboxGridRow } from 'react-flexbox-grid'

import FlexGrid from '../../FlexGrid'
import Row from '../Row'

describe('Row', () => {
  const doMount = (props = {}) => {
    const wrapper = mount(
      <FlexGrid>
        <Row {...props}>Some content</Row>
      </FlexGrid>
    )
    return wrapper.find(ReactFlexboxGridRow)
  }

  it('renders', () => {
    const row = doMount()
    expect(row).toMatchSnapshot()
  })

  it('renders a react-flexbox-grid Row component', () => {
    const row = doMount()

    expect(row).toMatchSelector(ReactFlexboxGridRow)
  })

  it('passes additional attributes to the react-flexbox-grid Row', () => {
    const row = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(row).toHaveProp('id', 'the-id')
    expect(row).toHaveProp('data-some-attr', 'some value')
  })

  describe('alignment', () => {
    it('can align columns horizontally to the start, center, or end', () => {
      let row = doMount({ horizontalAlign: 'start' })
      expect(row).toHaveProp('start', 'xs')

      row = doMount({ horizontalAlign: 'center' })
      expect(row).toHaveProp('center', 'xs')

      row = doMount({ horizontalAlign: 'end' })
      expect(row).toHaveProp('end', 'xs')
    })

    it('can align columns vertically to the top, middle, or bottom', () => {
      let row = doMount({ verticalAlign: 'top' })
      expect(row).toHaveProp('top', 'xs')

      row = doMount({ verticalAlign: 'middle' })
      expect(row).toHaveProp('middle', 'xs')

      row = doMount({ verticalAlign: 'bottom' })
      expect(row).toHaveProp('bottom', 'xs')
    })

    it('can be horizontally and vertically aligned', () => {
      const row = doMount({ horizontalAlign: 'start', verticalAlign: 'top' })

      expect(row).toHaveProp('start', 'xs')
      expect(row).toHaveProp('top', 'xs')
    })
  })

  it('can distribute columns around or between', () => {
    let row = doMount({ distribute: 'around' })
    expect(row).toHaveProp('around', 'xs')

    row = doMount({ distribute: 'between' })
    expect(row).toHaveProp('between', 'xs')
  })

  it('supports responsive reversal', () => {
    const row = doMount({
      xsReverse: true,
      smReverse: true,
      mdReverse: true,
      lgReverse: false,
      xlReverse: true,
    })

    expect(row.hasClass('xsReverse')).toEqual(true)
    expect(row.hasClass('smReverse')).toEqual(true)
    expect(row.hasClass('mdReverse')).toEqual(true)
    expect(row.hasClass('lgReverseCancel')).toEqual(true)
    expect(row.hasClass('xlReverse')).toEqual(true)
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
