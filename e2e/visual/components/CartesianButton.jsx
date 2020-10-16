/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Button from '../../../packages/Button'

const CartesianButton = props => (
  <div>
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <Cartesian
        {...props}
        component={Button}
        type={['button', 'submit', 'reset']}
        variant={['primary', 'secondary', 'inverted']}
        children={['Hello, world!']}
      />
    </div>
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <Cartesian
        {...props}
        component={Button}
        type="button"
        variant={['primary', 'secondary', 'inverted']}
        children={[`Pre-order Galaxy Note20 Ultra 5G `]}
      />
    </div>
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <Cartesian
        {...props}
        component={Button}
        type="button"
        variant={['primary', 'secondary', 'inverted', 'standard', 'brand', 'danger']}
        rank={['main', 'common']}
        children={[`View Bill`]}
      />
    </div>

    <div style={{ display: 'inline-flex', flexDirection: 'column', width: 300 }}>
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
