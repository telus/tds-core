import React from 'react'

import { version } from '../../package.json'
import logo from './Logo.svg'

import Text from '../../src/components/Typography/Text/Text'

const Logo = () => (
  <div>
    <a href="/" title="TELUS Design System">
      <img src={logo} alt="TELUS Logo" />
    </a>

    <Text>TDS v{version}</Text>
  </div>
)

export default Logo
