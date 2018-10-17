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

To use `Breadcrumbs` with `react-router`, add a `breadcrumbName` prop to each `<Route>` and enure they are properly
nested, then pass the `routes` and `params` prop provided by `react-router` to `Breadcrumbs`. You must also pass a `reactRouterLinkComponent` prop as you would with [Link](#link)

```jsx static
// routes.js
const App = () => (
  <Router>
    <Route breadcrumbName="Mobility" path="/mobility" component={Mobility}>
      <Route breadcrumbName="Accessories" path="/accessories" component={Accessories}>
    </Route>
  </Router>
)
```

```jsx static
// accessories.jsx
import { ReactRouterLink } from 'react-router'

const Accessories = ({ routes, params }) => (
  <Breadcrumbs routes={routes} params={params} reactRouterLinkComponent={ReactRouterLink} />
)
```

#### React Router 4

`Breadcrumbs` usage with v4 differs greatly from v3. To use Breadcrumb with v4 you can define an object containing all of your possible crumbs. You can then use `location` passed from `react-router` to build a `Breadcrumbs.Item` array.

```jsx static
const breadcrumbNameMap = {
  '/mobility': 'Mobility',
  '/mobility/accessories': 'Accessories',
  '/something/else': 'Something else',
}

const BreadcrumbNavigation = ({ location }) => {
  const Item = Breadcrumbs.Item
  const crumbs = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = crumbs.map((i, index) => {
    const url = `/${crumbs.slice(0, index + 1).join('/')}`
    return <Item>{breadcrumbNameMap[url]}</Item>
  })

  const breadcrumbItems = [
    <Item key="home" href="/">
      Home
    </Item>,
  ].concat(extraBreadcrumbItems)

  return <Breadcrumbs reactRouterLinkComponent={Link}>{breadcrumbItems}</Breadcrumbs>
}
```
