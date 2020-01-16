/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import TermsAndConditions, { FootnoteLink } from '../../../packages/TermsAndConditions'

const CartesianTermsAndConditions = props => (
  <div style={{ width: '25%' }}>
    <TermsAndConditions {...props} />
  </div>
)
const CartesianFootnoteLink = props => (
  <div style={{ width: '25%' }}>
    <FootnoteLink {...props} />
  </div>
)
const TermsAndConditionsContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%', transform: 'translateZ(0)' }}>
    <Cartesian component={CartesianTermsAndConditions} copy={['en', 'fr']} />
    <Cartesian
      component={CartesianFootnoteLink}
      copy={['en', 'fr']}
      number={[1, 2, 3]}
      onClick={() => {}}
    />
  </div>
)

export default { name: 'TermsAndConditions', Component: TermsAndConditionsContainer }
