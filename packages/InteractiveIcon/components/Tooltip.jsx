import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '@tds/core-text'
import { colorGreyShuttle, colorWhite } from '@tds/core-colours'

import animations from '../shared/animations'
import StyledInteractiveIconButton from '../shared/StyledInteractiveIconButton'

const StyledTooltip = styled.div(
  animations.reduceMotion,
  {
    position: 'absolute',

    padding: '0.0625rem 0.5rem 0.1875rem 0.5rem',
    maxWidth: '8.25rem',
    backgroundColor: colorGreyShuttle,
    border: `1px solid ${colorWhite}`,
    borderRadius: '0.25rem',
    zIndex: 4,

    marginTop: '0.25rem',
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 200ms',

    [`${StyledInteractiveIconButton}:hover + &,${StyledInteractiveIconButton}:focus + &`]: {
      visibility: 'visible',
      opacity: 1,
    },
    [`${StyledInteractiveIconButton}:focus + &`]: {
      zIndex: 3, // lower the zIndex on the tooltip focused on to prevent it from being displayed on top of the tooltip being hovered over
    },
  },
  ({ width }) => {
    if (width) {
      return {
        marginLeft: `calc(${width}px / -2 + 1.25rem)`,
      }
    }
    return {}
  }
)

const Tooltip = ({ children, ...props }) => {
  const tooltipRef = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(tooltipRef.current.offsetWidth)
  }, [])

  return (
    <StyledTooltip {...props} role="tooltip" ref={tooltipRef} width={width} aria-hidden="true">
      <Text size="small" invert>
        {children}
      </Text>
    </StyledTooltip>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tooltip
