/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import ChevronLink from '../../../packages/ChevronLink'

const CartesianChevronLink = props => (
  <Cartesian
    {...props}
    component={ChevronLink}
    variant={['primary', 'secondary', 'inverted']}
    direction={['left', 'right']}
    href={['http://telus.com']}
    children={['Get started', 'Learn more']}
  />
)

export default { name: 'ChevronLink', Component: CartesianChevronLink }
