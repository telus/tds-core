To implement responsive behaviour in your component, this package provides Sass-based media queries using [**sass-mq**](https://github.com/sass-mq/sass-mq), and a standardized set of breakpoints.

The `Responsive` React component is a thin wrapper over the [**react-media**](https://github.com/ReactTraining/react-media) community component, which "listens for matches to a CSS media query and renders its child component based on whether the query matches or not." While it is available, this component is not recommended for most use-cases.

### Responding to browser width

The included Sass-based media queries and the `Responsive` component both use the same breakpoint keys. The following chart details these breakpoint keys, and what values they represent.

| Breakpoint key | `$from` / `min-width` Value | `$until` / `max-width` Value |
| :------------- | :-------------------------- | ---------------------------- |
| `sm`           | 576px                       | 575px                        |
| `md`           | 768px                       | 767px                        |
| `lg`           | 992px                       | 991px                        |
| `xl`           | 1200px                      | 1199px                       |

### Usage

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
