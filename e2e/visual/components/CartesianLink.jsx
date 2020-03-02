/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Link from '../../../packages/Link'
import { Edit } from '../../../packages/InteractiveIcon/svgs/Dependent'

const CartesianLink = props => (
  <Cartesian
    {...props}
    component={Link}
    href="http://tds.telus.com"
    invert={[true, false]}
    children="TELUS Design System"
    icon={[undefined, Edit]}
    iconPosition={['left', 'right']}
  />
)

export default { name: 'Link', Component: CartesianLink }
