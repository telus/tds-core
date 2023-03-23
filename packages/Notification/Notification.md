```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/notification">
        Notification
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

**Use the "Open isolated" button above to view this component in full-width mode.**

A banner that highlights important messages.

Notifications are used to let users know:

- System status such as an error or outage
- Their actions have triggered a change such as confirmation of a payment
- Information such as letting the user know they have almost used all their data

Colours help indicate the type of message. For errors use a red background. For other notifications use grey. Lastly, if the message is promotional use branded colours. These are reflected in code via the `variant` prop, and the background colour will change to match the desiered variant. For example, the `error` variant will produce a red background.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification copy="en">
  <Text bold>Tip:</Text> These services are for large business organizations. Order products and
  services at <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

### Usage criteria

- The message of a notification must be text content only. You may use text-based styling such as bold text or links. Do
  not use other complex components or paragraphs.
- Use complete sentences, while keeping the content succinct.
- When there are multiple notifications, the messages should be served top to bottom from most to least important. Remove any unnecessary information such as promotional messages that add to the noise.
- Dismissible notifications should only be used for branded or general style notifications where there is no action needed from the user.

### Communicating with notifications

Use the `variant` prop to alter the Notification's appearance.

#### Branded

Use the `branded` variant for feedback or chat related messages.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="branded" copy="en">
  <Text bold>Help us improve this website.</Text> We’d love to hear your feedback.{' '}
  <Link href="http://telus.com">Tell us what you think</Link>
</Notification>
```

#### Success

Use the `success` variant to provide feedback of a successful operation. **The message will include an icon to indicate meaning and importance.**

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="success" copy="en">
  <Text bold>Your password was updated successfully.</Text> Manage your profile at{' '}
  <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

#### Error

Use the `error` variant to provide feedback of a failed operation. **The message will include an icon to indicate meaning and importance.**

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="error" copy="en">
  <Text bold>Your invitation to register online has expired.</Text> Request a new registration code
  at <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

#### Warning

Use the `warning` variant to provide feedback of a warning; users would still be able to proceed forward. **The message will include an icon to indicate meaning and importance.**

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="warning" copy="en">
  <Text bold>Looks like our registration is temporarily down.</Text> In the meantime, return to{' '}
  <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

### Dismissible

Notifications can either be passive or require action from the user. If the information is passive then it should be dismissible as indicated by an interactive close button on the far right. If the Notification requires an action then make the option(s) clear with a Chevron Link or Paragraph link style.

Use the `dismissible` prop to allow users to dismiss the Notification at any time. The `dismissible` prop must be used together with the `dismissibleA11yLabel` to remain accessible. Once dismissed, the Notification is removed from the DOM.

Please note:

- Branded, General and Success and Instructional variants can be dismissed
- Error and Warning variants should not be dismissed

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="branded" dismissible copy="en">
  <Text bold>Help us improve this website.</Text> We’d love to hear your feedback.{' '}
  <Link href="http://telus.com">Tell us what you think</Link>
</Notification>
```

### Using callbacks

#### onDismiss

Use the `onDismiss` prop to execute a function when a user clicks the dismiss button on the `Notification`. The `onDismiss` prop must be used together with the `dismissible` and `dismissibleA11yLabel` props.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification
  variant="instructional"
  dismissible
  onDismiss={() => alert('I was dismissed')}
  copy="en"
>
  You can request a new registration code at <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

#### onExit

Use the `onExit` prop to execute a function at the end of the `Notification` dismiss animation, when it has fully collapsed. The `onExit` prop must be used together with the `dismissible` and `dismissibleA11yLabel` props.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="success" dismissible onExit={() => alert('I have exited')} copy="en">
  <Text bold>Your password was updated successfully.</Text> Manage your profile at{' '}
  <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```
