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
    <FlexBox
      direction={a11yContentPosition === 'right' ? 'row-reverse' : 'row'}
      dangerouslyAddClassName={styles.centered}
    >
      {a11yContent ? <A11yContent>{a11yContent}</A11yContent> : null}
      {children}
    </FlexBox>
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  a11yContent: PropTypes.string,
  a11yContentPosition: PropTypes.string,
  children: PropTypes.string.isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default BaseButton
