/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Button from '../../../packages/Button'

const CartesianButton = props => (
  <div>
    <div>
      <Cartesian
        {...props}
        component={Button}
        type={['button', 'submit', 'reset']}
        variant={['primary', 'secondary', 'inverted']}
        children={['Hello, world!']}
      />
    </div>
    <div style={{ width: 200 }}>
      <Cartesian
        {...props}
        component={Button}
        type="button"
        variant={['primary', 'secondary', 'inverted']}
        children={[`Pre-order Galaxy Note20 Ultra 5G `]}
      />
    </div>
  </div>
)

export default { name: 'Button', Component: CartesianButton }
