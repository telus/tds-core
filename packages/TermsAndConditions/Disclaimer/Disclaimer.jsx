import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledParagraph } from '@tds/core-paragraph'
import { colorShuttleGrey } from '@tds/core-colours'
import { safeRest } from '@tds/util-helpers'

import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

const StyledDisclaimer = styled(StyledParagraph)({
  color: colorShuttleGrey,
})

const Disclaimer = ({ children, ...props }) => {
  return (
    <StyledDisclaimer {...safeRest(props)} size="small">
      <ColoredTextProvider>{children}</ColoredTextProvider>
    </StyledDisclaimer>
  )
}

Disclaimer.propTypes = {
  /**
   * The content.
   */
  children: PropTypes.node.isRequired,
}

export default Disclaimer
