/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Card from '../../../packages/Card'

const CartesianCard = props => (
  <div style={{ width: '20%', maxHeight: 250 }}>
    <Card {...props} />
  </div>
)

const CartesianContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianCard}
      variant={[
        'white',
        'lavender',
        'grey',
        'default',
        'branded',
        'alternative',
        'defaultWithBorder',
      ]}
      fullHeight={[true, false]}
      spacing={['default', 'narrow', 'compact', 'intermediate']}
      children="Get a new smartphone for $0 on a 2-year plan"
    />
  </div>
)
export default { name: 'Card', Component: CartesianContainer }
