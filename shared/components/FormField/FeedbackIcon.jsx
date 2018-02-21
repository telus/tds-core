import React from 'react'
import PropTypes from 'prop-types'

import StandaloneIcon from '@tds/core-standalone-icon'
import Fade from '../Animation/Fade'

import iconWrapperStyles from '../../styles/IconWrapper.modules.scss'

const FeedbackIcon = ({ showIcon, feedback }) => (
  <Fade timeout={100} in={showIcon} mountOnEnter={true} unmountOnExit={true}>
    {() => (
      <div className={iconWrapperStyles.fixLineHeight}>
        {feedback === 'success' ? (
          <StandaloneIcon
            symbol="checkmark"
            variant="primary"
            size={16}
            a11yText="The value of this input field is valid."
          />
        ) : (
          <StandaloneIcon
            symbol="exclamationPointCircle"
            variant="error"
            size={16}
            a11yText="The value of this input field is invalid."
          />
        )}
      </div>
    )}
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
