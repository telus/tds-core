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

### defaultMatches prop for server-side rendering

This component comes with a `defaultMatches` prop and its default is set to true.

When rendering on the server you can use the `defaultMatches` prop to set the initial state on the server to match whatever you think it will be on the client.

You can detect the user's device by analyzing the user-agent string from the HTTP request in your server-side rendering code. There are many ways of doing this, a popular tool is [mobile-detect](https://www.npmjs.com/package/mobile-detect).

```
initialState = {
  device: 'desktop' // add your own guessing logic here
};

<div>
  <Responsive maxWidth="md" defaultMatches={state.device === 'mobile'} render={() => (
    <Text>Render me below medium breakpoint.</Text>
  )}/>

  <Responsive minWidth="md" defaultMatches={state.device === 'desktop'} render={() => (
    <Text>Render me above medium breakpoint.</Text>
  )}/>
</div>
```

### Testing responsive behaviour

Moving the responsive behaviour into JavaScript enables testing of the results of media queries, which is impossible with CSS-based media queries. It is straightforwards to mock or stub the result of a media query for testing environments. Here are some examples of how we incorporated unit tests for responsive behaviour in some of the TDS components:

* [Button component tests](https://github.com/telusdigital/tds/blob/master/src/components/Button/__tests__/Button.spec.jsx#L52-L68) and its corresponding [JSX](https://github.com/telusdigital/tds/blob/master/src/components/Button/BaseButton/BaseButton.jsx#L17-L33) using the matches boolean flag
* [Tooltip component tests](https://github.com/telusdigital/tds/blob/master/src/components/Tooltip/__tests__/Tooltip.spec.jsx#L56-L102)  and its corresponding [JSX](https://github.com/telusdigital/tds/blob/master/src/components/Tooltip/Tooltip.jsx#L85-L112) rendering a particular bubble only when the media query matches
