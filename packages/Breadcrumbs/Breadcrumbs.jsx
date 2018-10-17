import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import { componentWithName } from '../../shared/utils/propTypes'

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

const getPath = (path, params, concatenatePaths, paths) => {
  let p = path
  if (concatenatePaths) {
    p = p.replace(/^\//, '')
    Object.keys(params).forEach(key => {
      p = p.replace(`:${key}`, params[key])
    })
    if (p) {
      paths.push(p)
    }
    return `/${paths.join('/')}`
  }
  return p
}

const getItems = (items, params, concatenatePaths) => {
  const paths = []
  return items.filter(item => item.path).map((item, i, filteredItems) => {
    const isLast = i === filteredItems.length - 1
    const breadcrumbName = getBreadcrumbName(item, params)
    const href = getPath(item.path, params, concatenatePaths, paths)
    return {
      breadcrumbName,
      href,
      current: isLast,
    }
  })
}

const getStructuredData = (items, baseUrl) => {
  return items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@id': `${baseUrl || ''}${item.href}`,
      name: item.breadcrumbName,
    },
  }))
}

/**
 * @version ./package.json
 */
const Breadcrumbs = ({
  routes,
  mainId,
  reactRouterLinkComponent,
  params = {},
  baseUrl,
  children,
  ...rest
}) => {
  let items
  if (children) {
    items = React.Children.toArray(children).map(child => ({
      path: child.props.href,
      breadcrumbName: child.props.children,
    }))
  } else {
    items = routes
  }
  items = getItems(items, params, !children)
  const structuredData = getStructuredData(items, baseUrl)

  return (
    <nav {...safeRest(rest)}>
      <ol>
        {items.map(({ href, current, breadcrumbName }) => (
          <Breadcrumbs.Item
            key={href}
            href={current ? `${href}${mainId}` : href}
            reactRouterLinkComponent={reactRouterLinkComponent}
            current={current}
          >
            {breadcrumbName}
          </Breadcrumbs.Item>
        ))}
      </ol>
      <Helmet>
        <script type="application/ld+json">
          {`
{
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": ${JSON.stringify(structuredData)}
}
`}
        </script>
      </Helmet>
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
   * Base URL used to build structured data.
   */
  baseUrl: PropTypes.string,
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
  baseUrl: undefined,
  mainId: '#main',
  reactRouterLinkComponent: undefined,
  params: {},
  children: undefined,
}

Breadcrumbs.Item = Item

export default Breadcrumbs
