import React from 'react'
import PropTypes from 'prop-types'

import Link from '@tds/core-link'

import joinClassNames from '../../../shared/utils/joinClassNames'
import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

import styles from './Item.modules.scss'
import linkStyles from '../../Link/Link.modules.scss'

const Item = ({ href, reactRouterLinkComponent, children, current, ...rest }) => {
  const linkOptions = { ...rest }

  if (reactRouterLinkComponent) {
    linkOptions.to = href
    linkOptions.reactRouterLinkComponent = reactRouterLinkComponent
  } else {
    linkOptions.href = href
  }
  if (current) {
    linkOptions['aria-current'] = 'page'
    return (
      <ColoredTextProvider tag="li" colorClassName={current ? styles.lastItem : styles.linkItem}>
        {React.createElement(
          reactRouterLinkComponent ? Link : 'a',
          {
            ...linkOptions,
            className: joinClassNames(linkStyles.base, linkStyles.inheritColor, styles.lastLink),
          },
          children
        )}
      </ColoredTextProvider>
    )
  }

  return (
    <ColoredTextProvider tag="li" colorClassName={current ? styles.lastItem : styles.linkItem}>
      <Link {...linkOptions}>{children}</Link>
    </ColoredTextProvider>
  )
}

Item.propTypes = {
  /**
   * Target URL.
   */
  href: PropTypes.string.isRequired,
  /**
   * @ignore
   *
   * React Router Link component. The reactRouterLinkComponent property will be passed down from from the parent `<Breadcrumbs>`.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Breadcrumb text
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   *
   * Indicates whether or not the Item should be as current/activ
   */
  current: PropTypes.bool,
}

Item.defaultProps = {
  reactRouterLinkComponent: undefined,
  current: false,
}

export default Item
