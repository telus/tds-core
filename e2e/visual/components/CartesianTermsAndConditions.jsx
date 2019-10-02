/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Strong from '../../../packages/Strong'

const CartesianStrong = props => (
  <Cartesian
    {...props}
    component={Strong}
    block={[false, true]}
    bold={[false, true]}
    size={['base', 'small', 'medium', 'large']}
    invert={[false, true]}
    children="Taxes and pay-per-use charges are extra."
  />
)

export default { name: 'TermsAndConditions', Component: CartesianStrong }
