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


### Testing responsive behaviour

Now that we are moving the responsive behaviour into JSX we can write tests to match or not to match a query so we can test which class gets put on an element. 

On a server, for instance in a test, a query will match by default and you can mock or stub the query for tests. Here are some examples how we incorporated unit tests for responsive behaviour in some of our components:
* [Button component tests](https://github.com/telusdigital/tds/blob/master/src/components/Button/__tests__/Button.spec.jsx#L52-L68) and its corresponding [JSX](https://github.com/telusdigital/tds/blob/master/src/components/Button/BaseButton/BaseButton.jsx#L17-L33) using the matches boolean flag
* [Tooltip component tests](https://github.com/telusdigital/tds/blob/master/src/components/Tooltip/__tests__/Tooltip.spec.jsx#L56-L102)  and its corresponding [JSX](https://github.com/telusdigital/tds/blob/master/src/components/Tooltip/Tooltip.jsx#L85-L112) rendering a particular bubble only when the media query matches
