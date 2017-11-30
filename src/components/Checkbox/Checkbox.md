```
<Box tag="fieldset" between={2}>
  <legend>Show me deals for...</legend>
  <Checkbox name="services" value="mobility" label="Mobility" />
  <Checkbox name="services" value="internet" label="Internet" />
  <Checkbox name="services" value="tv" label="TV" />
  <Checkbox name="services" value="home-phone" label="Home Phone" />
</Box>
```


### Getting feedback for an unchecked checkbox

Use the feedback attribute to give the user feedback regarding a missed checkbox by highlighting the label and checkbox element.


```
  <Checkbox name="terms" value="agree" label="I agree to the terms and conditions" feedback="error" />
```
