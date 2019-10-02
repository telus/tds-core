/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Notification from '../../../packages/Notification'

const CartesianNotification = props => (
  <Cartesian
    {...props}
    component={Notification}
    variant={['instructional', 'branded', 'success', 'error', 'warning']}
    copy={['en', 'fr']}
    dismissible={[false, true]}
    children="This is a notification"
  />
)

export default { name: 'Notification', Component: CartesianNotification }
