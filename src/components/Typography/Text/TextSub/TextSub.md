### Usage

The Text Sub component wraps text in a `<sub>` tag. It assures proper font sizes are rendered depending on the parent font size.

**Note: do not usre Text Sub within a Heading component. Use [Heading.Sub](#headingsub) instead.**

```
<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <Text.Sub>aliqua</Text.Sub>.
</Text>
```

```
<Text>Consectetur adipiscing<Text.Sub>elit</Text.Sub></Text>
```
