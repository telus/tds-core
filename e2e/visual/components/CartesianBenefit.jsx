/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import { BenefitWithHeading, BenefitNoHeading } from '../../../packages/Benefit'
import {
  Internet,
  FavouriteNetwork,
  Check,
  SecurityHouse,
  Heart,
} from '../../../packages/DecorativeIcon'

const CartesianBenefitWithHeading = props => (
  <Cartesian
    {...props}
    component={BenefitWithHeading}
    icon={[undefined, Check]}
    children={[
      [
        <BenefitWithHeading.Item heading="Benefit list">
          With heading and icons
        </BenefitWithHeading.Item>,
      ],
      [
        <BenefitWithHeading.Item icon={Internet} heading="Benefit list">
          With heading and icons
        </BenefitWithHeading.Item>,
        <BenefitWithHeading.Item icon={FavouriteNetwork} heading="Use within a card">
          Has 236 max width
        </BenefitWithHeading.Item>,
      ],
    ]}
  />
)

const CartesianBenefitNoHeading = props => (
  <Cartesian
    {...props}
    component={BenefitNoHeading}
    icon={[undefined, Check]}
    children={[
      <BenefitNoHeading.Item>This is a one item list</BenefitNoHeading.Item>,
      <>
        <BenefitNoHeading.Item icon={SecurityHouse}>This is a list</BenefitNoHeading.Item>
        <BenefitNoHeading.Item icon={Heart}>With different icons per item</BenefitNoHeading.Item>
      </>,
    ]}
  />
)

const CartesianBenefit = props => (
  <>
    <CartesianBenefitWithHeading {...props} />
    <CartesianBenefitNoHeading {...props} />
  </>
)

export default { name: 'Benefit', Component: CartesianBenefit }
