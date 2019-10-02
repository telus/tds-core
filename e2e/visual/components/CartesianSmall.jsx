/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Small from '../../../packages/Small'

const CartesianSmall = props => (
  <Cartesian {...props} component={Small} children="Taxes and pay-per-use charges are extra." />
)

export default { name: 'Small', Component: CartesianSmall }
