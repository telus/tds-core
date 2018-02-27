import React from 'react'
import PropTypes from 'prop-types'

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
 * @version 1.0.0
 *
 * A call to action link.
 */
const ChevronLink = ({ reactRouterLinkComponent, variant, direction, children, ...rest }) => {
  if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
    warn('Chevron Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  const innerLink = (
    <Box inline between={2}>
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
    innerLink
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
