import React from 'react'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'
import Radio from '../../../packages/Radio'

const CartesianRadio = props => (
  <fieldset>
    <StyledContainer as="legend">Account Type</StyledContainer>
    <Cartesian
      {...props}
      component={Radio}
      label="Personal Use"
      name="account-type"
      value="personal"
      checked={[true, false]}
      description={[undefined, 'You will be shown TELUS services designed for personal use.']}
      feedback={[undefined, 'error']}
      error="Default error message"
    />
  </fieldset>
)

export default { name: 'Radio', Component: CartesianRadio }
