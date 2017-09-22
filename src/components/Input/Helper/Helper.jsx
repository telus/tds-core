import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import styles from './Helper.modules.scss'

const Helper = ({ feedback, children, ...rest }) => (
  <div {...safeRest(rest)} className={feedback ? styles[feedback] : styles.default}>
    {children}
  </div>
)
Helper.propTypes = {
  feedback: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.node.isRequired
}
Helper.defaultProps = {
  feedback: undefined
}
Helper.displayName = 'Input.Helper'

export default Helper
