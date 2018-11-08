The `Responsive` component is a thin wrapper over the [**react-media**](https://github.com/ReactTraining/react-media) community
component, which "listens for matches to a CSS media query and renders its child component based on whether the query matches or not."

This package also contains Sass media query methods (documented below). In most cases **we recommend using the Sass methods
over the Responsive React component** since they do not adversely affect server-side rendering. While not recommended for general use, the Responsive component is useful if you want to do something programmatically. For example, changing a prop or swapping a component on resize.

### Breakpoints

The included Sass-based media queries and the `Responsive` component both use the same breakpoint keys. The following chart details these breakpoint keys, and what values they represent.

| Breakpoint key | `min-width` / `$from` Value | `max-width` / `$until` Value |
| :------------- | :-------------------------- | :--------------------------- |
| `sm`           | 576px                       | 575px                        |
| `md`           | 768px                       | 767px                        |
| `lg`           | 992px                       | 991px                        |
| `xl`           | 1200px                      | 1199px                       |

### Responsive component usage

Use the `render` prop for the common case of rendering a component only when the media query matches.

Use the `minWidth` and `maxWidth` props to configure viewport size ranges. The breakpoint specifiers will be converted to pixel-based
media queries.

```jsx
<div>
  <Responsive minWidth="sm" maxWidth="md" render={() => <Text>The document is at "small".</Text>} />
  <Responsive minWidth="md" render={() => <Text>The document is at "medium" or above.</Text>} />
</div>
```

For more power use a child function, whose only argument will be a boolean flag that indicates whether the media query
matches or not.

```jsx
<Responsive minWidth="md">
  {matches =>
    matches ? (
      <Text>The document is at "medium" or above.</Text>
    ) : (
      <Text>The document is less than "medium".</Text>
    )
  }
</Responsive>
```

Use the `query` prop if you need to match on [other media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features).

#### defaultMatches prop for server-side rendering

This component comes with a `defaultMatches` prop and its default is set to true.

When rendering on the server you can use the `defaultMatches` prop to set the initial state on the server to match whatever you think it will be on the client.

You can detect the user's device by analyzing the user-agent string from the HTTP request in your server-side rendering code. There are many ways of doing this, a popular tool is [mobile-detect](https://www.npmjs.com/package/mobile-detect).

```jsx
initialState = {
  device: 'desktop', // add your own detection logic here
}
;<div>
  <Responsive
    maxWidth="md"
    defaultMatches={state.device === 'mobile'}
    render={() => <Text>Render me below medium breakpoint.</Text>}
  />

  <Responsive
    minWidth="md"
    defaultMatches={state.device === 'desktop'}
    render={() => <Text>Render me above medium breakpoint.</Text>}
  />
</div>
```

#### Testing responsive behaviour

Moving the responsive behaviour into JavaScript enables testing of the results of media queries, which is impossible with CSS-based media queries. It is straightforwards to mock or stub the result of a media query for testing environments. Here are some examples of how we incorporated unit tests for responsive behaviour in some of the TDS components:

- [Button component tests](https://github.com/telusdigital/tds-core/blob/b2108d1074383ba887c5b87a2c3055799937fcd3/packages/Button/__tests__/Button.spec.jsx#L52-L68) and its corresponding [JSX](https://github.com/telusdigital/tds-core/blob/b2108d1074383ba887c5b87a2c3055799937fcd3/shared/components/BaseButton/BaseButton.jsx#L17-L34) using the matches boolean flag
- [Tooltip component tests](https://github.com/telusdigital/tds-core/blob/b2108d1074383ba887c5b87a2c3055799937fcd3/packages/Tooltip/__tests__/Tooltip.spec.jsx#L56-L102) and its corresponding [JSX](https://github.com/telusdigital/tds-core/blob/b2108d1074383ba887c5b87a2c3055799937fcd3/packages/Tooltip/Tooltip.jsx#L81-L108) rendering a particular bubble only when the media query matches

To implement responsive behaviour in your component, this package provides Sass-based media queries using [**sass-mq**](https://github.com/sass-mq/sass-mq), and a standardized set of breakpoints.

The `Responsive` React component is a thin wrapper over the [**react-media**](https://github.com/ReactTraining/react-media) community component, which "listens for matches to a CSS media query and renders its child component based on whether the query matches or not." While it is available, this component is not recommended for most use-cases.

### Sass media query method usage

To make use of Sass media queries through the Responsive component, first declare the following import at the top of your `.scss` file.

```scss
@import '~@tds/core-responsive/responsive';
```

Once this is done, you may leverage [**sass-mq**](https://github.com/sass-mq/sass-mq) style media queries to add responsive behaviour to your component.

```scss
.someClass {
  @include mq($from: sm, $until: lg) {
    width: 500px;
  }
  @include mq($from: xl) {
    width: 900px;
  }
}

.someOtherClass {
  @include mq($until: md, $and: '(orientation: landscape)') {
    width: 100%;
    height: 100%;
  }
}
```

#### MQ Parameters

| Parameter | Values                             | Effect                                                                                                                                  |
| --------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `$from`   | `sm`, `md`, `lg`, `xl`             | The CSS rules contained within will start at the defined point.                                                                         |
| `$until`  | `sm`, `md`, `lg`, `xl`             | The CSS rules contained within will end at the defined point.                                                                           |
| `$and`    | Standard CSS Media Query Arguments | Allows for custom arguments like orientation or DPI specifications using the standard CSS syntax. These are encased in quotation marks. |
