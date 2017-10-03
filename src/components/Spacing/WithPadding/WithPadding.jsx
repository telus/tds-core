import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import styles from '../Spacing.modules.scss'

const getClassName = (location, scale, dangerousClassName) =>
  joinClassNames(styles[`${location || 'all'}Padding-${scale}`], dangerousClassName)

const WithPadding = ({ location, scale, dangerouslyAddClassName, children, ...rest }) => (
  <div {...safeRest(rest)} className={getClassName(location, scale, dangerouslyAddClassName)}>
    {children}
  </div>
)

WithPadding.propTypes = {
  location: PropTypes.oneOf(['horizontal', 'vertical']),
  scale: PropTypes.oneOf([1, 2, 3, 4, 6]).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

WithPadding.defaultProps = {
  location: undefined,
  dangerouslyAddClassName: undefined,
}

export default WithPadding
