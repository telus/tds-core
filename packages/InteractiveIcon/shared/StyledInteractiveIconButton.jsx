import styled from 'styled-components'

import { colorWhite } from '@tds/core-colours'
import { buttons } from '@tds/shared-styles'

const getOutline = ({ variant }) => {
  if (variant !== 'inverted') {
    return {
      outline: 'none',
      '&:focus::-moz-focus-inner': {
        border: 0,
      },
    }
  }

  return {
    '&:focus': {
      outline: `0.125rem solid ${colorWhite}`,
    },
  }
}

const StyledInteractiveIconButton = styled.button(buttons.noStyle, getOutline, {
  width: '2.5rem',
  height: '2.5rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '-webkit-tap-highlight-color': 'transparent',
})

export default StyledInteractiveIconButton
