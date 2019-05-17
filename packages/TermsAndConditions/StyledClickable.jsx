import styled from 'styled-components'

import { colorWhite } from '@tds/core-colours'
import Clickable from '../../shared/components/Clickable/Clickable'

const StyledClickable = styled(Clickable)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colorWhite,
})

export default StyledClickable
