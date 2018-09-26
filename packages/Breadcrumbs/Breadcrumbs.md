### Using `children`
```jsx
<Breadcrumbs>
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
    breadcrumbName: 'Home'
  },
  {
    path: '/mobility',
    breadcrumbName: 'Mobility'
  },
  {
    path: '/accessories',
    breadcrumbName: 'Accessories'
  }
];
<Breadcrumbs routes={routes} />
```

### Usage with React Router
To use `Breadcrumnbs` with `react-router`, add a `breadcrumbName` prop to each `<Route>` and enure they are properly
nested, then pass the `routes` and `params` prop provided by `react-router` to `Breadcrumbs`. You must also pass a `reactRouterLinkComponent` prop just as you would with [Link](#link)

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
import { ReactRouterLink } from 'react-router';

const Accessories = ({ routes, params }) => (
  <Breadcrumbs routes={routes} params={params} reactRouterLinkComponent={ReactRouterLink} />
)

```
