/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'

import * as icons from '../../../packages/InteractiveIcon'

const StyledIconContainer = styled(StyledContainer)({
  padding: 12,
  width: 'auto',
})

const CartesianInteractiveIcon = props => (
  <React.Fragment>
    {Object.keys(icons)
      .filter(icon => icon !== 'default')
      .map(icon => (
        <Cartesian
          {...props}
          container={StyledIconContainer}
          component={icons[icon]}
          a11yText="A11yText"
          variant={['default', 'alternative', 'inverted']}
          tag={['button', 'a']}
        />
      ))}
  </React.Fragment>
)

export default { name: 'InteractiveIcon', Component: CartesianInteractiveIcon }
