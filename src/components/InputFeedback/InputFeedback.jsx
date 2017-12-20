import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box/Box'

import safeRest from '../../utils/safeRest'

import styles from './InputFeedback.modules.scss'

const InputFeedback = ({ feedback, children, ...rest }) => (
  <Box
    {...safeRest(rest)}
    inset={3}
    dangerouslyAddClassName={feedback ? styles[feedback] : styles.default}
  >
    {children}
  </Box>
)

InputFeedback.propTypes = {
  feedback: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.node.isRequired,
}

InputFeedback.defaultProps = {
  feedback: undefined,
}

export default InputFeedback
