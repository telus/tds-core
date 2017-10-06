Tooltips provide information a user may need to complete a form field. While a label is the succinct, essential text 
identifying the purpose of an input field, a tooltip can be used to provide more detailed instructions.

Use the `direction` prop to open the tooltip to the left or right of the trigger, so that it does not block other
content on the page. Be careful not to let the Tooltip extend beyond the edge of the page if opening to the right though.

On small screen sizes Tooltips will always open to the left to ensure they will be visible.

```
<Input
  label="Enter your device's IMEI number"
  type="number"
  tooltip={
    <Tooltip direction="left">
      You can find your device's IMEI by typing *#06# on its dialpad. Please enter the complete 15-digit number, without spaces or characters.
    </Tooltip>
  }
/>
```

