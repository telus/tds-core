import styled from 'styled-components'

import animations from './animations'

import StyledInteractiveIconButton from './StyledInteractiveIconButton'

const StyledInteractiveIconHover = styled.span(
  ({ theme }) => ({ backgroundColor: theme.hoverBackgroundColor }),
  animations.reduceMotion,
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    transition: 'transform 200ms ease-in-out',
    transform: 'scale(0,0)',
    [`${StyledInteractiveIconButton}:focus &, ${StyledInteractiveIconButton}:active &`]: {
      transform: 'scale(1,1)',
    },
  }
)
export default StyledInteractiveIconHover
