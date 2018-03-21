import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import FlexBox from '../../Flexbox/Flexbox'

import styles from './BaseButton.modules.scss'

/**
 * A common base for Button and ButtonLink.
 */
const BaseButton = ({ element, variant, dangerouslyAddClassName, children, ...rest }) => {
  return React.createElement(
    element,
    {
      ...safeRest(rest),
      className: joinClassNames(styles.buttonSizing, styles[variant], dangerouslyAddClassName),
    },
    <FlexBox direction="row" dangerouslyAddClassName={styles.centered}>
      {children}
    </FlexBox>
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.string.isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default BaseButton
