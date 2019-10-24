import styled from 'styled-components'

import StyledInteractiveIconButton from './StyledInteractiveIconButton'

const StyledInteractiveIconHover = styled.span(
  ({ theme }) => ({ backgroundColor: theme.hoverBackgroundColor }),
  {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    borderRadius: '50%',
    transition: 'transform 200ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    transform: 'scale(0,0)',
    [`${StyledInteractiveIconButton}:focus &, ${StyledInteractiveIconButton}:active &`]: {
      transform: 'scale(1,1)',
    },
  }
)
export default StyledInteractiveIconHover
