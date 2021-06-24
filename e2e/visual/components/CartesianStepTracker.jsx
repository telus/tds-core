/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import StepTracker from '../../../packages/StepTracker'

const CartesianStepTracker = props => (
  <Cartesian
    {...props}
    component={StepTracker}
    current={[0, 2]}
    steps={[['Plans & Addons', 'Account Creation', 'Phone Information', 'Payment Setup', 'Submit']]}
    copy={['en', 'fr']}
  />
)

export default { name: 'StepTracker', Component: CartesianStepTracker }
