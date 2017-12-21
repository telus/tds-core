import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box/Box'

import safeRest from '../../utils/safeRest'

import styles from './Feedback.modules.scss'

const Feedback = ({ feedback, children, ...rest }) => (
  <Box
    {...safeRest(rest)}
    inset={3}
    dangerouslyAddClassName={feedback ? styles[feedback] : styles.default}
  >
    {children}
  </Box>
)

Feedback.propTypes = {
  feedback: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.node.isRequired,
}

Feedback.defaultProps = {
  feedback: undefined,
}

export default Feedback
