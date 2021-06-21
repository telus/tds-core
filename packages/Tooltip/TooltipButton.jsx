import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import A11yContent from '@tds/core-a11y-content'

import { componentWithName } from '@tds/util-prop-types'

export const StyledIconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`

const TooltipButton = forwardRef(({ a11yText, inverted, onClick, icon: Icon }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <A11yContent>{a11yText}</A11yContent>
      <Icon color={inverted ? 'white' : 'greyShark'} />
    </StyledIconButton>
  )
})

TooltipButton.displayName = 'TooltipButton'

TooltipButton.propTypes = {
  a11yText: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.exact([componentWithName('QuestionMarkCircle')]).isRequired,
}

TooltipButton.defaultProps = {
  inverted: false,
  onClick: undefined,
}

export default TooltipButton
