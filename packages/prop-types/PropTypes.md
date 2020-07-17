```js static
import * as TDSPropTypes from '@tds/util-prop-types'
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default
;<PackageVersion version={version} />
```

### `componentWithName(componentName: String, checkDisplayName: Boolean)`

Limits the prop to only allow components with a specific name.

```jsx noeditor static
import { componentWithName } from '@tds/util-prop-types'

const PlanChooser = () => {
  return <fieldset>{children}</fieldset>
}

const App = () => (
  <PlanChooser>
    <Radio>Super Plan</Radio>
    <Radio>Smaller Plan</Radio>
  </PlanChooser>
)

PlanChooser.propTypes = {
  children: componentWithName('Radio').isRequired,
}
```

It can optionally check for `displayName`.

```jsx noeditor static
import { componentWithName } from '@tds/util-prop-types'

const PlanChooser = () => {
  return <div>{children}</div>
}

const Paragraph = () => {
  return <p>{children}</p>
}
Paragraph.displayName = 'MyParagraph'

const App = () => (
  <PlanChooser>
    <Paragraph>Super Plan</Paragraph>
    <Paragraph>Smaller Plan</Paragraph>
  </PlanChooser>
)

PlanChooser.propTypes = {
  children: componentWithName('MyParagraph', true),
}
```

### `htmlElement(element: String)`

Limits the prop to only allow a specific HTML tag.

```jsx noeditor static
import { htmlElement } from '@tds/util-prop-types'

const Link = () => {
  return <a>{children}</a>
}

const App = () => (
  <CustomLink>
    <span>Purchase Pixel 3</span>
  </CustomLink>
)

CustomLink.propTypes = {
  children: htmlElement('span').isRequired,
}
```

`htmlElement` is especially useful in keeping space between elements. A common use case for this is when you need to insert an `A11yContent` component in between 2 surrounding components. See the example below.

```jsx noeditor static
import { htmlElement } from '@tds/util-prop-types'

const Link = () => {
  return <Link>{children}</Link>
}

const App = () => (
  <Link>
    <span>Purchase <A11yContent>Pixel 3</A11yContent> Now</span>
  </Link>
)

Link.propTypes = {
  children: or([PropTypes.string, componentWithName('A11yContent'), htmlElement('span')).isRequired,
}
```

```jsx
<ButtonLink>
  <span>
    Purchase <A11yContent>Pixel 3</A11yContent> Now
  </span>
</ButtonLink>
```

### `or(validators: Array)`

Limits the prop to only allow PropTypes that match those specified.

```jsx noeditor static
import { or } from '@tds/util-prop-types'

const Button = () => {
  return <button>{children}</button>
}

Button.propTypes = {
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

const App = () => (
  <Button>
    Purchase <A11yContent>Pixel 3</A11yContent>
  </Button>
)
```

### <a name="responsiveProps"></a>`responsiveProps(propType)`

#### Using a component with `responsiveProps`

Responsive props all follow the same pattern.

- When passed a **single** value, the value will be used for all breakpoints
- When passed an **object**, each value will be applied to its corresponding breakpoint (xs, sm, md, lg, xl)
  - When using an object, the value is applied to its breakpoint and all breakpoints above until overwritten

The below example shows two ways you can build a `repsonsiveProps` object to create a `FlexGrid.Col` that is `'center'` on `xs` and `sm`, and `'left'` on `md`, `lg`, `xl`.

```js noeditor static
<FlexGrid.Col
  horizontalAlign={{
    xs: 'center',
    sm: 'center',
    md: 'left',
    lg: 'left',
    xl: 'left'
  }}
/>

// or

<FlexGrid.Col align={{ xs: 'center', md: 'left' }} />
```

#### Creating a component with `responsiveProps`

To create `responsiveProps` pass the `PropType` or multiple prop types in the form of `PropTypes.oneOfType()` to `responsiveProps()` like so.

```jsx noeditor static
import { responsiveProps } from '@tds/util-prop-types'

const MyComponent = ({ align }) => (
  // ...
)

MyComponent.propTypes = {
  align: responsiveProps(PropTypes.string)
};
```

will create the following PropType structure

```jsx noeditor static
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),
])
```
