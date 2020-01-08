/* eslint-disable react/jsx-key, react/no-children-prop */
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

const CartesianInteractiveIcon = props => (
  <React.Fragment>
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
            copy="en"
            numItems={2}
          />
        ))}
    </React.Fragment>
    <React.Fragment>
      {Object.keys(dependentIcons)
        .filter(dependentIcon => dependentIcon !== 'default')
        .map(dependentIcon => (
          <Cartesian
            {...props}
            component={Link}
            href="http://tds.telus.com"
            invert={[true, false]}
            children="TELUS Design System"
            icon={dependentIcons[dependentIcon]}
            iconPosition={['left', 'right']}
          />
        ))}
    </React.Fragment>
  </React.Fragment>
)

export default { name: 'InteractiveIcon', Component: CartesianInteractiveIcon }
