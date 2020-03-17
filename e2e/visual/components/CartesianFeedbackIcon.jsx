/* eslint-disable react/jsx-key */
import React from 'react'
import styled from 'styled-components'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'

import * as icons from '../../../packages/FeedbackIcon'

const StyledIconContainer = styled(StyledContainer)({
  padding: 12,
  width: 'auto',
})

const CartesianFeedbackIcon = props => (
  <>
    {Object.keys(icons)
      .filter(icon => icon !== 'default')
      .map(icon => (
        <Cartesian {...props} container={StyledIconContainer} component={icons[icon]} />
      ))}
  </>
)

export default { name: 'FeedbackIcon', Component: CartesianFeedbackIcon }
