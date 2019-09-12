**Use the "Open isolated" button above to view this component in full-width mode.**

The `Notification` spans the entire width of the screen, and aligns the message with the page content.

By default, notifications will be displayed in the `instructional` variant.

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

Use the `dismissible` prop to allow users to dismiss the `Notification` at any time. The `dismissible` prop must be used together with the `dismissibleA11yLabel` to remain accessible. Once dismissed, the `Notification` is removed from the DOM.

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
<Notification variant="error" dismissible onDismiss={() => alert('I was dismissed')} copy="en">
  <Text bold>Your invitation to register online has expired.</Text> Request a new registration code
  at <Link href="http://telus.com">TELUS.com</Link>
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
