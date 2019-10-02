/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Paragraph from '../../../packages/Paragraph'

const CartesianUnorderedList = props => (
  <Cartesian
    {...props}
    component={Paragraph}
    bold={[false, true]}
    size={['small', 'medium', 'large']}
    align={['left', 'center', 'right']}
    invert={[false, true]}
    children="Our commitment to service is demonstrated in everything we do."
  />
)

export default { name: 'Paragraph', Component: CartesianUnorderedList }
