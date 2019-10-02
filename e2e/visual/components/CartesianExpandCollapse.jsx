/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import { ExpandCollapse, Accordion } from '../../../packages/ExpandCollapse'

const CartesianAccordion = props => (
  <Cartesian
    {...props}
    component={Accordion}
    open={[undefined, 'features', 'specs']}
    topDivider={[true, false]}
    children={[
      [
        <ExpandCollapse.Panel id="features" header="Features">
          {`Connected GPS - Connect to your phone's GPS to see real-time run stats.`}
        </ExpandCollapse.Panel>,
        <ExpandCollapse.Panel id="specs" header="Specs">
          {`Display - OLED`}
        </ExpandCollapse.Panel>,
      ],
    ]}
  />
)

const CartesianExpandCollapse = props => (
  <React.Fragment>
    <Cartesian
      {...props}
      component={ExpandCollapse}
      open={[[], ['features'], ['features', 'specs']]}
      topDivider={[true, false]}
      children={[
        [
          <ExpandCollapse.Panel id="features" header="Features">
            {`Connected GPS - Connect to your phone's GPS to see real-time run stats.`}
          </ExpandCollapse.Panel>,
          <ExpandCollapse.Panel id="specs" header="Specs">
            {`Display - OLED`}
          </ExpandCollapse.Panel>,
        ],
      ]}
    />
    <CartesianAccordion {...props} />
  </React.Fragment>
)

export default { name: 'ExpandCollapse', Component: CartesianExpandCollapse }
