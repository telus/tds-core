/* eslint-disable react/jsx-key, react/no-children-prop react/prop-types */
import React from 'react'
import styled from 'styled-components'

import { Cartesian } from '@compositor/kit'

import StyledContainer from '../shared/StyledContainer'

import * as icons from '../../../packages/InteractiveIcon'

import Link from '../../../packages/Link'
import * as dependentIcons from '../../../packages/InteractiveIcon/svgs/Dependent'

const StyledIconContainer = styled(StyledContainer)({
  padding: 12,
  width: 'auto',
})

const CartesianDependentIcon = props => (
  <Cartesian
    {...props}
    component={Link}
    href="http://tds.telus.com"
    invert={[true, false]}
    icon={props.icon}
    children="TELUS Design System"
  />
)

const CartesianInteractiveIcon = props => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <div style={{ width: '50%' }}>
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
            copy="en"
            numItems={2}
          />
        ))}
    </div>
    <div style={{ width: '25%' }}>
      {Object.keys(dependentIcons)
        .filter(dependentIcon => dependentIcon !== 'default')
        .map(dependentIcon => (
          <CartesianDependentIcon
            icon={dependentIcons[dependentIcon]}
            iconPosition="left"
            {...props}
          />
        ))}
    </div>
    <div style={{ width: '25%' }}>
      {Object.keys(dependentIcons)
        .filter(dependentIcon => dependentIcon !== 'default')
        .map(dependentIcon => (
          <CartesianDependentIcon
            iconPosition="right"
            icon={dependentIcons[dependentIcon]}
            {...props}
          />
        ))}
    </div>
  </div>
)

export default { name: 'InteractiveIcon', Component: CartesianInteractiveIcon }
