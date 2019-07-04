Tooltips provide a descriptive and detailed explanation or instructions to help the user fill in the form field. You may
use one when the information is useful only to a small percentage of users (ie. tech savvy people wouldn't need this info).
Tooltips may also be useful when vertical space is an issue.

Use the `direction` prop to open the tooltip to the left or right of the trigger, so that it does not block other
content on the page. Be careful not to let the Tooltip extend beyond the edge of the page if opening to the right though.

On small screen sizes Tooltips will always open to the left to ensure they will be visible.

```jsx
<Input
  label="Enter your device's IMEI number"
  type="number"
  tooltip={
    <Tooltip copy="en">
      You can find your device's IMEI by typing *#06# on its dialpad. Please enter the complete
      15-digit number, without spaces or characters.
    </Tooltip>
  }
/>
```

You can also place Tooltips anywhere you like as a standalone element.

```jsx
<div>
  <Box between={2} inline>
    <Text>Here is the all-new quadcopter </Text>
    <Tooltip copy="en">A quadcoptor is a flying drone with 4 propellors.</Tooltip>
  </Box>
</div>
```

### Accessible copy

To indicate to assistive devices the purpose of the `Tooltip`, invisible copy is placed within the component. Passing `"en"` or `"fn"` to the `copy` prop will use the component's English and French text respectively. If the provided text is not sufficient, an object containing custom text may be provided. The key-value pairs used are `a11yStandalone` for a `Tooltip` without an attached `Input`, and `a11yTextLinked` for a `Tooltip` with an attached `Input`.

When providing custom text to `a11yTextLinked`, it is required that it contain the `%{label}` token. This token will substitute in the attached `Input`'s label, and is necessary for those with assistive devices to identify which `Input` the `Tooltip` belongs to.

_To see the effects of this, use a screen reader or view the `<span>` rendered within the component that contains the accessible text._

#### Standalone

```jsx
<Tooltip
  copy={{
    a11yTextStandalone: 'Reveal this standalone Tooltip for more information.',
    a11yTextLinked:
      'This is a Tooltip for the Input with the label "%{label}". Reveal to learn more.',
  }}
>
  I'm a standalone Tooltip!
</Tooltip>
```

#### Linked

```jsx
<Input
  label="Enter the component linked to this Input"
  type="number"
  tooltip={
    <Tooltip
      copy={{
        a11yTextStandalone: 'Reveal this standalone Tooltip for more information.',
        a11yTextLinked:
          'This is a Tooltip for the Input with the label "%{label}". Reveal to learn more.',
      }}
    >
      Tooltip is linked to this Input.
    </Tooltip>
  }
/>
```
