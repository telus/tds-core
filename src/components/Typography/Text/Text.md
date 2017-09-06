### Usage

The Text component can be used within other typography components such as [Paragraph](#paragraph). It is useful for modifying text appearance such as **bold**, or changing text size.

```
<Text size="small" bold>Tell us what you think</Text>
```

### Inherits props from Paragraph

```
<Paragraph size="small"><Text size="small">Tell us what you think></Text>  It's in our nature to listen.</Paragraph>
```

### Invert on dark colours

```
const PurpleBlock = require('../../__docs__/PurpleBlock').default;

<PurpleBlock>
  <Text invert>Personal</Text>
</PurpleBlock>
```
