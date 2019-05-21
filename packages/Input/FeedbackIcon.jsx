import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StandaloneIcon from '@tds/core-standalone-icon'
import { Fade } from '@tds/shared-animation'

const StyledIcon = styled.div({ lineHeight: 1 })

const renderIcon = feedback => {
  if (feedback === 'success') {
    return (
      <StandaloneIcon
        symbol="checkmark"
        variant="primary"
        size={16}
        a11yText="The value of this input field is valid."
      />
    )
  }
  if (feedback === 'error') {
    return (
      <StandaloneIcon
        symbol="exclamationPointCircle"
        variant="error"
        size={16}
        a11yText="The value of this input field is invalid."
      />
    )
  }
  return null
}

const FeedbackIcon = ({ showIcon, feedback }) => (
  <Fade timeout={100} in={showIcon} mountOnEnter={true} unmountOnExit={true}>
    {() => <StyledIcon>{renderIcon(feedback)}</StyledIcon>}
  </Fade>
)
FeedbackIcon.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  feedback: PropTypes.oneOf(['success', 'error']),
}
FeedbackIcon.defaultProps = {
  feedback: undefined,
}

export default FeedbackIcon
