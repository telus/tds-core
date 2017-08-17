## Minimal usage

Used for all general or instructional type messages. Defaults to instructional.

Only pass in text. Write in complete sentences.

```
<Notification>
  <strong>Tip:</strong> The services are best suited for larger business organizations ordering more than 50 plans on one account.
</Notification>
```

## Variants

Use the `variant` prop to alter the Notification's appearance.


### Branded

Used for feedback or chat related messages.

```
<Notification variant="branded">
  <strong>Tell us what you think</strong> It’s in our nature to listen. As TELUS.com continues to evolve, we’d love to hear more from you.
</Notification>
```

### Success

Used for successful transactional messages. Text is bolded to show importance.

```
<Notification variant="success">
  Your password has been successfully changed.
</Notification>
```

### Error

Used for error messages. Text is bolded to show importance.

```
<Notification variant="error">
  Looks like our registration system is temporarily down. You’ll need to come back another time to register for My Account. In the meantime, return to TELUS.com.
</Notification>
```
