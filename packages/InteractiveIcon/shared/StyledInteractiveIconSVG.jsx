import styled from 'styled-components'

const StyledInteractiveIconSVG = styled.svg(({ theme }) => ({ fill: theme.iconColor }), {
  width: '1.5rem',
  height: '1.5rem',
  zIndex: '2',
})

export default StyledInteractiveIconSVG
