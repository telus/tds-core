/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import ButtonLink from '../../../packages/ButtonLink'

const CartesianButtonLink = props => (
  <Cartesian
    {...props}
    component={ButtonLink}
    variant={['primary', 'secondary', 'inverted']}
    href="http://tds.telus.com"
    children="TELUS Design System"
    fullWidth={[false, true]}
  />
)

export default { name: 'ButtonLink', Component: CartesianButtonLink }
