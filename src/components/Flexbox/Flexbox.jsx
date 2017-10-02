import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import styles from './Flexbox.modules.scss'

const getClassName = (direction, dangerousClassName) => (
  joinClassNames(styles[direction], dangerousClassName)
)

const Flexbox = ({ direction, dangerouslyAddClassName, children, ...rest }) => (
  <div {...safeRest(rest)} className={getClassName(direction, dangerouslyAddClassName)}>
    {children}
  </div>
)

Flexbox.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired
}

Flexbox.defaultProps = {
  dangerouslyAddClassName: undefined
}

export default Flexbox
