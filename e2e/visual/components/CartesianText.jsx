/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Text from '../../../packages/Text'

const CartesianText = props => (
  <div style={{ width: '25%' }}>
    <Cartesian {...props} component={Text} />
  </div>
)
const CartesianContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianText}
      block={[false, true]}
      bold={[false, true]}
      size={['base', 'small', 'medium', 'large']}
      invert={[false, true]}
      children="Taxes and pay-per-use charges are extra."
    />
  </div>
)

export default { name: 'Text', Component: CartesianContainer }
