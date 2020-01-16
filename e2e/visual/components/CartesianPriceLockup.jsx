/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import PriceLockup from '../../../packages/PriceLockup'

const CartesianPriceLockup = props => (
  <div style={{ width: '25%' }}>
    <PriceLockup {...props} />
  </div>
)

const PriceLockupContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianPriceLockup}
      size={['small', 'medium', 'large']}
      signDirection={['left', 'right']}
      topText={[undefined, 'Starting from']}
      bottomText={[undefined, 'on a 2-year plan']}
      rateText={[undefined, 'per month']}
      price="29"
    />
  </div>
)

export default { name: 'PriceLockup', Component: PriceLockupContainer }
