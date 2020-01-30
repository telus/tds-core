/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import PriceLockup from '../../../packages/PriceLockup'
import FootnoteLink from '../../../packages/TermsAndConditions/FootnoteLink/FootnoteLink'

const CartesianPriceLockup = props => (
  <div style={{ width: '10%' }}>
    <PriceLockup {...props} />
  </div>
)

const PriceLockupContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianPriceLockup}
      size={['small', 'medium', 'large']}
      signDirection={['left', 'right']}
      topText={[undefined, 'Starting from']}
      bottomText={[undefined, 'on a 2-year plan']}
      rateText={[undefined, 'per month']}
      price="29"
      footnoteLinks={[undefined, <FootnoteLink number={[1, 2, 3]} copy="en" onClick={() => {}} />]}
    />
  </div>
)

export default { name: 'PriceLockup', Component: PriceLockupContainer }
