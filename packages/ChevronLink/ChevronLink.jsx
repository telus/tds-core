import React from 'react'
import PropTypes from 'prop-types'

import A11yContent from '@tds/core-a11y-content'
import Box from '@tds/core-box'
import DecorativeIcon from '@tds/core-decorative-icon'

import safeRest from '../../shared/utils/safeRest'
import { warn } from '../../shared/utils/warn'

import styles from './ChevronLink.modules.scss'

const getClassName = variant => {
  switch (variant) {
    case 'secondary':
      return styles.secondary
    case 'inverted':
      return styles.inverted
    default:
      return styles.primary
  }
}

const getIcon = (symbol, classes) => (
  <span className={classes}>
    <DecorativeIcon symbol={symbol} size={16} />
  </span>
)

/**
 * A call to action link.
 *
 * @version ./package.json
 */
const ChevronLink = ({
  reactRouterLinkComponent,
  variant,
  direction,
  a11yContent,
  a11yContentPosition,
  children,
  ...rest
}) => {
  if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
    warn('Chevron Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  const innerLink = (
    <Box tag="span" inline between={2}>
      {direction === 'left' ? getIcon('leftChevron', styles.leftChevron) : undefined}
      <span>{children}</span>
      {direction === 'right' ? getIcon('chevron', styles.rightChevron) : undefined}
    </Box>
  )

  return React.createElement(
    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant),
    },
    a11yContent && a11yContentPosition === 'left' ? (
      <span>
        <A11yContent>{a11yContent}</A11yContent>{' '}
      </span>
    ) : null,
    innerLink,
    a11yContent && a11yContentPosition === 'right' ? (
      <span>
        <A11yContent>{a11yContent}</A11yContent>
      </span>
    ) : null
  )
}

ChevronLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The chevron's direction and placement.
   */
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
   * Text that is hidden from view, but visible to screen readers
   */
  a11yContent: PropTypes.string,
  /**
   * Position of hidden A11yContent text. 'left' reads the content before the button label is read, and 'right' reads it after the label
   */
  a11yContentPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * The label.
   */
  children: PropTypes.string.isRequired,
}
ChevronLink.defaultProps = {
  variant: 'primary',
  direction: 'right',
  reactRouterLinkComponent: null,
  to: null,
  href: null,
}

export default ChevronLink
