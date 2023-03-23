```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/breadcrumbs">
        Breadcrumbs
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- Breadcrumb links must link to internal pages at telus.com
- Use plain language to describe the page title
- We recommend the `Breadcrumbs` depth contain fewer than five links
- All links in the `Breadcrumbs` are clickable. The last `Breadcrumbs.Item` is not a link
- The `Breadcrumbs` appear as the 3rd tier of the navigation
- On desktop viewports, the `Breadcrumbs` should be displayed inline, without wrapping. If the `Breadcrumbs` need to wrap we recommend a maximum of 2 lines
- On mobile viewports, the `Breadcrumbs` can wrap a maximum of three lines

### Using `children`

```jsx
<Breadcrumbs baseUrl="http://localhost:6060/en">
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/mobility">Mobility</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/mobility/accessories">Accessories</Breadcrumbs.Item>
</Breadcrumbs>
```

### Using `routes`

```jsx
const routes = [
  {
    path: '/',
    breadcrumbName: 'Home',
  },
  {
    path: '/mobility',
    breadcrumbName: 'Mobility',
  },
  {
    path: '/accessories',
    breadcrumbName: 'Accessories',
  },
]
;<Breadcrumbs routes={routes} baseUrl="http://localhost:6060/en" />
```

### Usage with React Router

#### React Router 3

To use `Breadcrumbs` with `react-router`, add a `breadcrumbName` prop to each `<Route>` and ensure they are properly
nested, then pass the `routes` and `params` prop provided by `<Route>` to `Breadcrumbs`. You must also pass a `reactRouterLinkComponent` prop as you would with [Link](#/Links?id=link)

```jsx static
// routes.js
import { Router, Route } from 'react-router'
import Mobility from './Mobility'
import Accessories from './Accessories'

const App = () => (
  <Router>
    <Route breadcrumbName="Mobility" path="/mobility" component={Mobility}>
      <Route breadcrumbName="Accessories" path="/accessories" component={Accessories}>
    </Route>
  </Router>
)
```

```jsx static
// Accessories.jsx
import { Link as ReactRouterLink } from 'react-router'
import Breadcrumbs from '@tds/core-breadcrumbs'

const Accessories = ({ routes, params }) => (
  <Breadcrumbs routes={routes} params={params} reactRouterLinkComponent={ReactRouterLink} />
)
```

#### React Router 4

`Breadcrumbs` usage with v4 differs greatly from v3. To use Breadcrumb with v4 you can define an object containing all of your possible crumbs. You can then use `location` passed from `react-router` to build a `Breadcrumbs.Item` array.

```jsx static
// BreadcrumbNavigation.jsx
import { Link as ReactRouterLink } from 'react-router-dom'
import Breadcrumbs from '@tds/core-breadcrumbs'

const breadcrumbNameMap = {
  '/mobility': 'Mobility',
  '/mobility/accessories': 'Accessories',
  '/something/else': 'Something else',
}

const BreadcrumbNavigation = ({ location }) => {
  const crumbs = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = crumbs.map((i, index) => {
    const url = `/${crumbs.slice(0, index + 1).join('/')}`
    return <Breadcrumbs.Item href={url}>{breadcrumbNameMap[url]}</Breadcrumbs.Item>
  })

  const breadcrumbItems = [
    <Breadcrumbs.Item key="home" href="/">
      Breadcrumbs.Item
    </Breadcrumbs.Item>,
  ].concat(extraBreadcrumbItems)

  return <Breadcrumbs reactRouterLinkComponent={ReactRouterLink}>{breadcrumbItems}</Breadcrumbs>
}
```

#### Combining React Router Links with standard anchor links

If you need to combine both `react-router-dom` and TDS `Link` components, you can add a `reactRouterLinkComponent` prop to `Breadcrumbs.Item` where needed as show below.

```jsx static
// BreadcrumbNavigation.jsx
import { Link as ReactRouterLink } from 'react-router-dom'
import Breadcrumbs from '@tds/core-breadcrumbs'

const BreadcrumbNavigation = () => (
  <Breadcrumbs>
    <Breadcrumbs.Item href="/my-account">My TELUS</Breadcrumbs.Item>
    <Breadcrumbs.Item href="/my-account/services" reactRouterLinkComponent={ReactRouterLink}>
      Services
    </Breadcrumbs.Item>
    <Breadcrumbs.Item
      href="/my-account/services/internet"
      reactRouterLinkComponent={ReactRouterLink}
    >
      Internet
    </Breadcrumbs.Item>
  </Breadcrumbs>
)
```
