import React from 'react'

import { version } from '../../package.json'
import logo from './Logo.svg'

const Logo = () => (
  <div>
    <a href="/" title="TELUS Design System">
      <img src={logo} alt="TELUS Logo" />
    </a>

    TDS v{version}
  </div>
)

export default Logo
