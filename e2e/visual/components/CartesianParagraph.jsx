/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Paragraph from '../../../packages/Paragraph'

const CartesianParagraph = props => (
  <div style={{ width: '50%' }}>
    <Paragraph {...props} />
  </div>
)

const ParagraphContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianParagraph}
      bold={[false, true]}
      size={['small', 'medium', 'large']}
      align={['left', 'center', 'right']}
      invert={[false, true]}
      children="Our commitment to service is demonstrated in everything we do."
    />
  </div>
)

export default { name: 'Paragraph', Component: ParagraphContainer }
