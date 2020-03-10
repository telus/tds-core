/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Link from '../../../packages/Link'

const CartesianLink = props => (
  <Cartesian
    {...props}
    component={Link}
    href="http://tds.telus.com"
    invert={[true, false]}
    children="TELUS Design System"
  />
)

export default { name: 'Link', Component: CartesianLink }
