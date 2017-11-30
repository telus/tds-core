```
<Box tag="fieldset" between={2}>
  <legend>Show me deals for...</legend>
  <Checkbox label="Mobility" />
  <Checkbox label="Internet" />
  <Checkbox label="TV" />
  <Checkbox label="Home Phone" />
</Box>
```


### Getting feedback for an unchecked checkbox

Use the feedback attribute to give the user feedback regarding a missed checked checkbox by highlighting the label and checkbox element.


```
  <Checkbox label="I agree to the terms and conditions" feedback="error" />
```
