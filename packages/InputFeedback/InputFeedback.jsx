import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box/Box'

import safeRest from '../../src/utils/safeRest'

import styles from './InputFeedback.modules.scss'

/**
 * A feedback box commonly used with form fields.
 *
 * <span class="docs--badge__new">new</span> <span class="docs--badge__version">v0.33.0</span>
 */
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
  /**
   * A feedback state that changes the background colour.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * The content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired,
}

InputFeedback.defaultProps = {
  feedback: undefined,
}

export default InputFeedback
