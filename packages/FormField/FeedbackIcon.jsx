import React from 'react'
import PropTypes from 'prop-types'

import StandaloneIcon from '@tds/core-standalone-icon'
import { Fade } from '@tds/shared-animation'

import iconWrapperStyles from '../../shared/styles/IconWrapper.modules.scss'

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
    {() => <div className={iconWrapperStyles.fixLineHeight}>{renderIcon(feedback)}</div>}
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
