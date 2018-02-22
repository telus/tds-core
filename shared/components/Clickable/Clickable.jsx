import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../../src/utils/joinClassNames'
import safeRest from '../../../src/utils/safeRest'

import styles from './Clickable.modules.scss'

/**
 * An invisible button.
 */
const Clickable = ({ dangerouslyAddClassName, dangerouslyAddStyle, children, type, ...rest }) => (
  <button
    {...safeRest(rest)}
    className={joinClassNames(styles.clickable, dangerouslyAddClassName)}
    style={dangerouslyAddStyle}
    type={type}
  >
    {children}
  </button>
)

Clickable.propTypes = {
  dangerouslyAddClassName: PropTypes.string,
  dangerouslyAddStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

Clickable.defaultProps = {
  dangerouslyAddClassName: undefined,
  dangerouslyAddStyle: undefined,
  type: 'button',
}

export default Clickable
