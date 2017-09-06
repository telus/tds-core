### Usage

The Text Sub component wraps text in a `<sub>` tag. It assures proper font sizes are rendered depending on the parent font size.

**Note: do not use Text Sub within a Heading component. Use [Heading.Sub](#headingsub) instead.**

```
<div>
  <div>
    <Text size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<Text.Sub>aliqua</Text.Sub>.</Text>
  </div>
  <div>
    <Text size="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<Text.Sub>aliqua</Text.Sub>.</Text>
  </div>
  <div>
    <Text size="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<Text.Sub>aliqua</Text.Sub>.</Text>
  </div>
</div>
```
