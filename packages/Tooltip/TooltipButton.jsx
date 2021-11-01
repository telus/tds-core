import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import A11yContent from '@tds/core-a11y-content'
import { buttons } from '@tds/shared-styles'
import { componentWithName } from '@tds/util-prop-types'

export const StyledIconButton = styled.button(buttons.noStyle)

const TooltipButton = forwardRef(({ a11yText, inverted, onClick, icon: Icon }, ref) => {
  return (
    <StyledIconButton onClick={onClick} ref={ref} type="button">
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
  icon: componentWithName('QuestionMarkCircle').isRequired,
}

TooltipButton.defaultProps = {
  inverted: false,
  onClick: undefined,
}

export default TooltipButton
