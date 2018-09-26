import React from 'react'
import PropTypes from 'prop-types'

import Link from '@tds/core-link'

import joinClassNames from '../../../shared/utils/joinClassNames'
import ColoredTextProvider from '../../../shared/components/ColoredTextProvider/ColoredTextProvider'

import styles from './Item.modules.scss'
import linkStyles from '../../Link/Link.modules.scss'


const renderLastLink = (href, children) => (
  <a
    href={href}
    className={joinClassNames(linkStyles.base, linkStyles.inheritColor, styles.lastLink)}
    aria-current="page"
  >
    {children}
  </a>
)
const Item = ({ href, reactRouterLinkComponent, children, isLast }) => {
  let item
  if (isLast) {
    item = renderLastLink(href, children)
  } else {
    const linkOptions = {}
    if (reactRouterLinkComponent) {
      linkOptions.to = href
      linkOptions.reactRouterLinkComponent = reactRouterLinkComponent
    } else {
      linkOptions.href = href
    }
    item = <Link {...linkOptions}>{children}</Link>
  }

  return (
    <ColoredTextProvider tag="li" colorClassName={isLast ? styles.lastItem : styles.linkItem}>
      {item}
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
   * The in-page link for the current page. The mainId property will be passed down from from the parent `<Breadcrumbs>`.
   */
  mainId: PropTypes.string,
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
   */
  isLast: PropTypes.bool,
}

Item.defaultProps = {
  reactRouterLinkComponent: undefined,
  isLast: false,
}

export default Item
