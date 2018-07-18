import React from 'react'
import PropTypes from 'prop-types'
import { componentWithName, or } from 'airbnb-prop-types'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import styles from './BaseButton.modules.scss'

/**
 * A common base for Button and ButtonLink.
 */
const BaseButton = ({ element, variant, dangerouslyAddClassName, children, ...rest }) => {
  return React.createElement(
    element,
    {
      ...safeRest(rest),
      className: joinClassNames(styles.sizing, styles[variant], dangerouslyAddClassName),
    },
    children
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default BaseButton
