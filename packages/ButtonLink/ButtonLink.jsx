import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'

import BaseButton from '../../shared/components/BaseButton/BaseButton'

import styles from './ButtonLink.modules.scss'

/**
 * @version 1.0.1
 *
 * A link that is styled as a button.
 */
const ButtonLink = ({ reactRouterLinkComponent, variant, children, ...rest }) => {
  if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
    warn('Link Button', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return (
    <BaseButton
      {...safeRest(rest)}
      element={reactRouterLinkComponent || 'a'}
      variant={variant}
      dangerouslyAddClassName={styles[variant]}
    >
      {children}
    </BaseButton>
  )
}

ButtonLink.propTypes = {
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Target URL
   */
  href: PropTypes.string,
  /**
   * The label.
   */
  children: PropTypes.string.isRequired,
}
ButtonLink.defaultProps = {
  variant: 'primary',
  reactRouterLinkComponent: null,
  to: null,
  href: null,
}

export default ButtonLink
