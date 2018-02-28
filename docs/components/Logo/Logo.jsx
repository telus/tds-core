import React from 'react'

import logo from './Logo.svg'

import Box from '../../../packages/Box/Box'
import ChevronLink from '../../../packages/ChevronLink/ChevronLink'

const Logo = () => (
  <div>
    <a href="#styleguidist-top" title="TELUS Design System">
      <img src={logo} alt="TELUS Logo" />
    </a>

    <Box horizontal={1} vertical={2}>
      <ChevronLink href="../" variant="secondary" direction="left">
        TDS guidelines
      </ChevronLink>
    </Box>
  </div>
)

export default Logo
