The `Responsive` component is a thin wrapper over the [**react-media**](https://github.com/ReactTraining/react-media) community 
component, which "listens for matches to a CSS media query and renders stuff based on whether the query matches or not."

### Responding to browser width

Use `minWidth` and `maxWidth` to configure viewport size ranges. The breakpoint specifiers will be converted to pixel-based
media queries:

| Breakpoint key | `minWidth` media query | `maxWidth` media query |
| -------------- | ------------------- | ------------------- |
| `sm` | `(min-width: 576px)` | `(max-width: 575px)` |
| `md` | `(min-width: 768px)` | `(max-width: 767px)` |
| `lg` | `(min-width: 992px)` | `(max-width: 991px)` |
| `xl` | `(min-width: 1200px)` | `(max-width: 1199px)` |

Use the `query` prop if you need to match on [other media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features). 

### Usage

Use the `render` prop for the common case of rendering a component only when the media query matches.

```jsx
<div>
  <Responsive minWidth="sm" maxWidth="md" render={() => (
    <Text>The document is at "small".</Text>
  )}/>
  <Responsive minWidth="md" render={() => (
    <Text>The document is at "medium" or above.</Text>
  )}/>
</div>
```

For more power use a child function, whose only argument will be a boolean flag that indicates whether the media query 
matches or not. 

```jsx
<Responsive minWidth="md">
  {matches => matches ? (
    <Text>The document is at "medium" or above.</Text>
  ) : (
    <Text>The document is less than "medium".</Text>
  )}
</Responsive>
```
