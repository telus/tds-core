import styled from 'styled-components'

import { buttons } from '@tds/shared-styles'

const getOutline = ({ variant }) => variant !== 'inverted' && { outline: 'none' }

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
