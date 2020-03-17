import React from 'react'

import { Cartesian } from '@compositor/kit'

import Box from '../../../packages/Box'
import HairlineDivider from '../../../packages/HairlineDivider'

const CartesianHairlineDivider = props => (
  <>
    <Box between={4}>
      <Cartesian {...props} component={HairlineDivider} vertical={false} gradient={[false, true]} />
    </Box>
    <Box inline between={4}>
      <Cartesian component={HairlineDivider} vertical gradient={[false, true]} />
      <Box vertical={7} />
    </Box>
  </>
)

export default { name: 'HairlineDivider', Component: CartesianHairlineDivider }
