import React from 'react'
import PropTypes from 'prop-types'

import { componentWithName } from '@tds/util-proptypes'

import safeRest from '../../shared/utils/safeRest'

import Item from './Item/Item'

const getBreadcrumbName = (item, params) => {
  if (!item.breadcrumbName) {
    return null
  }
  let breadcrumbName = item.breadcrumbName
  Object.keys(params).forEach(key => {
    breadcrumbName = breadcrumbName.replace(`:${key}`, params[key])
  })
  return breadcrumbName
}

const renderItems = (items, params, mainId, reactRouterLinkComponent, concatenatePaths) => {
  const paths = []
  return items.filter(item => item.path).map((item, i, filteredItems) => {
    const isLastItem = i === filteredItems.length - 1

    const breadcrumbName = getBreadcrumbName(item, params)

    let href
    if (concatenatePaths) {
      let path = item.path || ''
      path = path.replace(/^\//, '')
      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key])
      })
      if (path) {
        paths.push(path)
      }
      href = `/${paths.join('/')}`
    } else {
      href = item.path
    }

    return (
      <Breadcrumbs.Item
        key={href}
        href={isLastItem ? mainId : href}
        reactRouterLinkComponent={reactRouterLinkComponent}
        isLast={isLastItem}
      >
        {breadcrumbName}
      </Breadcrumbs.Item>
    )
  })
}

/**
 * @version ./package.json
 */
const Breadcrumbs = ({
  routes,
  mainId,
  reactRouterLinkComponent,
  params = {},
  children,
  ...rest
}) => {
  let items
  if (children) {
    items = React.Children.map(children, child => ({
      path: child.props.href,
      breadcrumbName: child.props.children,
    }))
  } else {
    items = routes
  }
  items = renderItems(items, params, mainId, reactRouterLinkComponent, !children)

  return (
    <nav {...safeRest(rest)}>
      <ol>{items}</ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  /**
   * An array of routes to be displayed as breadcrumbs.
   */
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      breadcrumbName: PropTypes.string.isRequired,
    })
  ),
  /**
   * The in-page link to the current page. This will be the href of the last item in the `<Breadcrumbs>`. The mainId property will be passed down from from the parent `<Breadcrumbs>`.
   */
  mainId: PropTypes.string,
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * React Router params.
   */
  params: PropTypes.object,
  /**
   * A list of Items to be used as an alternative to the `routes` prop.
   */
  children: componentWithName('Item'),
}

Breadcrumbs.defaultProps = {
  routes: undefined,
  mainId: '#main',
  reactRouterLinkComponent: undefined,
  params: {},
  children: undefined,
}

Breadcrumbs.Item = Item

export default Breadcrumbs
