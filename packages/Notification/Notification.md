**Use the "Open isolated" button above to view this component in full-width mode.**

The `Notification` spans the entire width of the screen, and aligns the message with the page content.

By default, notifications will be displayed in the `instructional` variant.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification>
  <Text bold>Tip:</Text> The services are best suited for larger business organizations ordering
  more than 50 plans on one account.
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
<Notification variant="branded">
  <Text bold>Tell us what you think.</Text> It’s in our nature to listen. As TELUS.com continues to
  evolve, we’d love to <Link href="http://telus.com">hear more from you</Link>.
</Notification>
```

#### Success

Use the `success` variant to provide feedback of a successful transaction. **The message will include an icon to indicate meaning and importance.**

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="success">Your password has been successfully changed.</Notification>
```

#### Error

Use the `error` variant to provide feedback of a failed transaction. **The message will include an icon to indicate meaning and importance.**

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="error">
  Looks like our registration system is temporarily down. You’ll need to come back another time to
  register for My Account. In the meantime, return to <Link href="http://telus.com">TELUS.com</Link>
  .
</Notification>
```

### Dismissible

Use the `dismissible` prop to allow users to dismiss the `Notification` at any time. The `dismissible` prop must be used together with the `dismissibleA11yLabel` to remain accessible. Once dismissed, the `Notification` is removed from the DOM.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification variant="branded" dismissible dismissibleA11yLabel="Close">
  <Strong>Free shipping:</Strong> This item is not eligible for a guaranteed delivery date. Order
  now to reserve your place in line. To track your order, please use the order tracking tool in the
  confirmation email sent after your purchase.
</Notification>
```

### Using Callbacks

#### onDismiss

Use the `onDismiss` prop to execute a function when a user dismisses the `Notification`. The `onDismiss` prop must be used together with the `dismissible` and `dismissibleA11yLabel` props.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification
  variant="error"
  dismissible
  dismissibleA11yLabel="Close"
  onDismiss={() => alert('I was dismissed')}
>
  Looks like our registration system is temporarily down. You’ll need to come back another time to
  register for My Account. In the meantime, return to <Link href="http://telus.com">TELUS.com</Link>
</Notification>
```

#### onExit

Use the `onExit` prop to execute a function at the end of the `Notification` dismiss animation. The `onExit` prop must be used together with the `dismissible` and `dismissibleA11yLabel` props.

```jsx { "props": { "className": "docs_full-width-playground" } }
<Notification
  variant="success"
  dismissible
  dismissibleA11yLabel="Close"
  onExit={() => console.log('I have exited')}
>
  Your registration is complete.
</Notification>
```
