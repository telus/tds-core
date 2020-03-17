import React from 'react'

import { Cartesian } from '@compositor/kit'

import * as navButtons from '../../../packages/InteractiveIcon/svgs/NavButton'
import * as dependentIcons from '../../../packages/InteractiveIcon/svgs/Dependent'
import * as limitedIcons from '../../../packages/InteractiveIcon/svgs/Limited'
import { IconButton } from '../../../packages/InteractiveIcon'

const CartesianInteractiveIcon = () => (
  <div>
    <div>
      {Object.keys(navButtons).map(key => (
        <Cartesian
          key={key}
          component={navButtons[key]}
          copy="en"
          variant={['default', 'inverted']}
        />
      ))}
    </div>

    <div>
      {Object.keys(dependentIcons).map(key => (
        <Cartesian
          key={key}
          component={dependentIcons[key]}
          color={['telusPurple', 'white', 'greyShark', 'accessibleGreen']}
        />
      ))}
    </div>

    <div>
      {Object.keys(limitedIcons).map(key => (
        <Cartesian
          key={key}
          component={limitedIcons[key]}
          variant={['default', 'basic', 'alternative', 'inverted']}
        />
      ))}
    </div>

    <div>
      <Cartesian
        component={IconButton}
        a11yText="Hello"
        variant={['default', 'alternative', 'inverted']}
        icon={dependentIcons.Add}
      />
    </div>
  </div>
)

export default { name: 'InteractiveIcon', Component: CartesianInteractiveIcon }
