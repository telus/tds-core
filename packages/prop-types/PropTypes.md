```js static
import { * as TDSPropTypes } from '@tds/util-prop-types'
```

```jsx noeditor
const { version } = require('./package.json')
const PackageVersion = require('../../docs/components/custom/PackageVersion/PackageVersion').default
;<PackageVersion version={version} />
```

### `componentWithName(string)`

Limits the prop to only allow components with a specific name.

```jsx noeditor static
const propTypes = {
  children: TDSPropTypes.componentWithName('Button'),
}
```
