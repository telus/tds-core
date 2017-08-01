## Minimal usage

Used for all general or instructional type messages.

```
<Notification><strong>Tip:</strong> The services are best suited for larger business organizations ordering more than 50 plans on one account.</Notification>
```

## Variants

Use the `variant` prop to alter the Notification's appearance.


### Branded

Used for feedback or chat related messages.

```
<Notification variant="branded"><strong>Tell us what you think</strong> It’s in our nature to listen. As TELUS.com continues to evolve, we’d love to hear more from you</Notification>
```

### Success

Used for successful transactional messages (example is missing the green checkmark)

```
<Notification variant="success">Your password has been successfully changed.</Notification>
```

### Error

Used for error messages (example is missing the red exclamation icon)

```
<Notification variant="error">
  <p>Looks like our registration system is temporarily down. You’ll need to come back another time to register for My Account.</p>
</Notification>
```

### Instructional

```
<Notification variant="instructional">
  Fill out the form below, then click <em>"Next"</em> to continue.
</Notification>
```
