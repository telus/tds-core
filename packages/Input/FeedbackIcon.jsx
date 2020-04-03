import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NotificationSuccess, NotificationError } from '@tds/core-feedback-icon'
import { Fade } from '@tds/shared-animation'

const StyledIcon = styled.div({ lineHeight: 1 })

const renderIcon = feedback => {
  if (feedback === 'success') {
    return <NotificationSuccess copy={{ a11yText: 'The value of this input field is valid.' }} />
  }
  if (feedback === 'error') {
    return <NotificationError copy={{ a11yText: 'The value of this input field is invalid.' }} />
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
