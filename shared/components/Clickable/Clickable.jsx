import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../utils/joinClassNames'

import styles from './Clickable.modules.scss'

/**
 * An invisible button.
 */
const Clickable = ({ children, type, className, innerRef, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    {...rest}
    ref={innerRef}
    className={joinClassNames(styles.clickable, className)}
  >
    {children}
  </button>
)

Clickable.propTypes = {
  /* @ignore */
  className: PropTypes.string,
  /* @ignore */
  innerRef: PropTypes.object,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
}

Clickable.defaultProps = {
  type: 'button',
  className: undefined,
  innerRef: undefined,
}

export default Clickable
