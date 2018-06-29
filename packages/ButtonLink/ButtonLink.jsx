import React from 'react'
import PropTypes from 'prop-types'

import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'

import BaseButton from '../../shared/components/BaseButton/BaseButton'

import styles from './ButtonLink.modules.scss'

/**
 * A link that is styled as a button.
 *
 * @version ./package.json
 */
const ButtonLink = ({
  reactRouterLinkComponent,
  variant,
  a11yContent,
  a11yContentPosition,
  children,
  ...rest
}) => {
  if ((reactRouterLinkComponent || rest.to) && !(reactRouterLinkComponent && rest.to)) {
    warn('Link Button', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }

  return (
    <BaseButton
      {...safeRest(rest)}
      element={reactRouterLinkComponent || 'a'}
      variant={variant}
      dangerouslyAddClassName={styles[variant]}
      a11yContent={a11yContent}
      a11yContentPosition={a11yContentPosition}
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
ButtonLink.defaultProps = {
  variant: 'primary',
  reactRouterLinkComponent: null,
  to: null,
  href: null,
  a11yContentPosition: 'right',
}

export default ButtonLink
