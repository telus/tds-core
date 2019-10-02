/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Spinner from '../../../packages/Spinner'

const CartesianSpinner = props => (
  <Cartesian
    {...props}
    component={Spinner}
    spinning={[false, true]}
    label="Spinner is spinning"
    inline={[false, true]}
    size={['large', 'small']}
    variant={['primary', 'secondary']}
    fullScreen={[false, true]}
    children="Taxes and pay-per-use charges are extra."
  />
)

export default { name: 'Spinner', Component: CartesianSpinner }
