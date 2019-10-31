/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import Breadcrumbs from '../../../packages/Breadcrumbs'

const CartesianBreadcrumbs = props => (
  <Cartesian
    {...props}
    component={Breadcrumbs}
    baseUrl={['http://tds.telus.com']}
    children={[
      <Breadcrumbs.Item href="http://tds.telus.com">Home</Breadcrumbs.Item>,
      [
        <Breadcrumbs.Item href="https://tds.telus.com/">Home</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="https://tds.telus.com/components/index.html">
          Components
        </Breadcrumbs.Item>,
      ],
      [
        <Breadcrumbs.Item href="https://tds.telus.com/">Home</Breadcrumbs.Item>,
        <Breadcrumbs.Item href="https://tds.telus.com/getting-started/getting-started.html">
          Getting Started
        </Breadcrumbs.Item>,
        <Breadcrumbs.Item href="https://tds.telus.com/getting-started/designers.html">
          Designers
        </Breadcrumbs.Item>,
      ],
    ]}
  />
)

export default { name: 'Breadcrumbs', Component: CartesianBreadcrumbs }
