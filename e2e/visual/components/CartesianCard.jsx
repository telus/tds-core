/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Card from '../../../packages/Card'

const CartesianCard = props => (
  <Cartesian
    {...props}
    component={Card}
    variant={['default', 'defaultWithBorder', 'branded', 'alternative']}
    children="Get a new smartphone for $0 on a 2-year plan"
  />
)

export default { name: 'Card', Component: CartesianCard }
