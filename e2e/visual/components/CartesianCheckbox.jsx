import React from 'react'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'
import Checkbox from '../../../packages/Checkbox'

const CartesianCheckbox = props => (
  <fieldset>
    <StyledContainer as="legend">Services</StyledContainer>
    <Cartesian
      {...props}
      component={Checkbox}
      label="Home Phone"
      name="services"
      value="home-phone"
      id="services"
      checked={[true, false]}
      feedback={[undefined, 'error']}
      error={(undefined, 'Please select a service')}
    />
  </fieldset>
)

export default { name: 'Checkbox', Component: CartesianCheckbox }
