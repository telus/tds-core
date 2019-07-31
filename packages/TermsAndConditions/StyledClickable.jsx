import styled from 'styled-components'

import { colorWhite } from '@tds/core-colours'
import { buttons } from '@tds/shared-styles'

const StyledClickable = styled.button(buttons.noStyle, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colorWhite,
})

export default StyledClickable
