import React from 'react'
import PropTypes from 'prop-types'

import A11yContent from '@tds/core-a11y-content'

import safeRest from '../../utils/safeRest'
import joinClassNames from '../../utils/joinClassNames'

import FlexBox from '../Flexbox/Flexbox'

import styles from './BaseButton.modules.scss'

/**
 * A common base for Button and ButtonLink.
 */
const BaseButton = ({
  element,
  variant,
  dangerouslyAddClassName,
  a11yContent,
  a11yContentPosition,
  children,
  ...rest
}) => {
  return React.createElement(
    element,
    {
      ...safeRest(rest),
      className: joinClassNames(styles.sizing, styles[variant], dangerouslyAddClassName),
    },
    <FlexBox direction="row" dangerouslyAddClassName={styles.centered}>
      <span>
        {a11yContent && a11yContentPosition === 'left' ? (
          <A11yContent>{a11yContent}</A11yContent>
        ) : null}
      </span>
      <span>{children}</span>
      <span>
        {a11yContent && a11yContentPosition === 'right' ? (
          <A11yContent>{a11yContent}</A11yContent>
        ) : null}
      </span>
    </FlexBox>
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  a11yContent: PropTypes.string,
  a11yContentPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.string.isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default BaseButton
