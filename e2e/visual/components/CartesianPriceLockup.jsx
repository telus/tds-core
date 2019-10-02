/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import PriceLockup from '../../../packages/PriceLockup'

const CartesianPriceLockup = props => (
  <Cartesian
    {...props}
    component={PriceLockup}
    size={['small', 'medium', 'large']}
    signDirection={['left', 'right']}
    topText={[undefined, 'Starting from']}
    bottomText={[undefined, 'on a 2-year plan']}
    rateText={[undefined, 'per month']}
    price="29"
  />
)

export default { name: 'PriceLockup', Component: CartesianPriceLockup }
