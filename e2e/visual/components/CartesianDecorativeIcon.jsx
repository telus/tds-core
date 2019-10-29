/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'

import * as icons from '../../../packages/DecorativeIcon'

const StyledIconContainer = styled(StyledContainer)({
  padding: 12,
  width: 'auto',
})

const CartesianDecorativeIcon = props => (
  <React.Fragment>
    {Object.keys(icons)
      .filter(icon => icon !== 'default')
      .map(icon => (
        <Cartesian
          {...props}
          container={StyledIconContainer}
          component={icons[icon]}
          variant={['default', 'alternative', 'inverted']}
          size={[16, 24]}
        />
      ))}
  </React.Fragment>
)

export default { name: 'DecorativeIcon', Component: CartesianDecorativeIcon }
