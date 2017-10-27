import React from 'react'
import PropTypes from 'prop-types'

import joinClassNames from '../../utils/joinClassNames'
import safeRest from '../../utils/safeRest'

import styles from './Clickable.modules.scss'

const Clickable = ({ dangerouslyAddClassName, children, ...rest }) => (
  <button {...safeRest(rest)} className={joinClassNames(styles.clickable, dangerouslyAddClassName)}>
    {children}
  </button>
)

Clickable.propTypes = {
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Clickable.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default Clickable
