/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import PriceLockup from '../../../packages/PriceLockup'
import FootnoteLink from '../../../packages/TermsAndConditions/FootnoteLink/FootnoteLink'

const renderCartesianPriceLockup = options => props => (
  <div style={{ minWidth: options.minWidth, padding: '0 8px 8px 0' }}>
    <PriceLockup {...props} />
  </div>
)

const PriceLockupContainer = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ width: '20%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cartesian
          component={renderCartesianPriceLockup({ minWidth: '130px' })}
          size="small"
          signDirection={['left', 'right']}
          topText={[undefined, 'Starting from']}
          bottomText={[undefined, 'on a 2-year plan']}
          rateText={[undefined, 'per month']}
          price="29"
          footnoteLinks={[
            undefined,
            <FootnoteLink number={[1, 2]} copy="en" onClick={() => {}} />,
            <FootnoteLink number={[1, 2, 3, 4]} copy="en" onClick={() => {}} />,
          ]}
        />
      </div>
    </div>

    <div style={{ width: '25%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cartesian
          component={renderCartesianPriceLockup({ minWidth: '190px' })}
          size="medium"
          signDirection={['left', 'right']}
          topText={[undefined, 'Starting from']}
          bottomText={[undefined, 'on a 2-year plan']}
          rateText={[undefined, 'per month']}
          price="29"
          footnoteLinks={[
            undefined,
            <FootnoteLink number={[1, 2]} copy="en" onClick={() => {}} />,
            <FootnoteLink number={[1, 2, 3, 4]} copy="en" onClick={() => {}} />,
          ]}
        />
      </div>
    </div>

    <div style={{ width: '25%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cartesian
          component={renderCartesianPriceLockup({ minWidth: '300px' })}
          size="large"
          signDirection={['left', 'right']}
          topText={[undefined, 'Starting from']}
          bottomText={[undefined, 'on a 2-year plan']}
          rateText={[undefined, 'per month']}
          price="29"
          footnoteLinks={[
            undefined,
            <FootnoteLink number={[1, 2]} copy="en" onClick={() => {}} />,
            <FootnoteLink number={[1, 2, 3, 4]} copy="en" onClick={() => {}} />,
          ]}
        />
      </div>
    </div>

    <div style={{ width: '30%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cartesian
          component={renderCartesianPriceLockup({ minWidth: '130px' })}
          size="medium"
          signDirection={['left', 'right']}
          rateText={[undefined, 'per month']}
          price="25"
          strikethrough
          a11yText="price without discount"
        />
        <Cartesian
          component={renderCartesianPriceLockup({ minWidth: '130px' })}
          size="small"
          signDirection={['left', 'right']}
          rateText={[undefined, 'per month']}
          price="50"
          strikethrough
          a11yText="price without discount"
        />
      </div>
    </div>
  </div>
)

export default { name: 'PriceLockup', Component: PriceLockupContainer }
