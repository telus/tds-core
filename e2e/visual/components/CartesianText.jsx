/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Text from '../../../packages/Text'

const CartesianText = props => (
  <Cartesian
    {...props}
    component={Text}
    block={[false, true]}
    bold={[false, true]}
    size={['base', 'small', 'medium', 'large']}
    invert={[false, true]}
    children="Taxes and pay-per-use charges are extra."
  />
)

export default { name: 'Text', Component: CartesianText }
