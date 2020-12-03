/* eslint-disable react/no-children-prop */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import ButtonLink from '../../../packages/ButtonLink'

const CartesianButtonLink = props => (
  <div>
    <Cartesian
      {...props}
      component={ButtonLink}
      variant={['primary', 'secondary', 'inverted']}
      href="http://tds.telus.com"
      children="TELUS Design System"
      fullWidth={[false, true]}
    />
    <Cartesian
      {...props}
      component={ButtonLink}
      variant={['standard', 'brand', 'inverted']}
      rank={['common', 'main']}
      href="http://tds.telus.com"
      children="NEW variants and ranks"
      fullWidth={[false, true]}
    />
  </div>
)

export default { name: 'ButtonLink', Component: CartesianButtonLink }
