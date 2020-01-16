/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Notification from '../../../packages/Notification'

const CartesianNotification = props => (
  <div style={{ width: '25%' }}>
    <Notification {...props} />
  </div>
)

const CartesianContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianNotification}
      variant={['instructional', 'branded', 'success', 'error', 'warning']}
      copy={['en', 'fr']}
      dismissible={[false, true]}
      children="This is a notification"
    />
  </div>
)

export default { name: 'Notification', Component: CartesianContainer }
