## Minimal Usage

Provide a function in the `onClick` prop to perform an action when clicked. **Avoid using a button if navigation 
is the primary action, as a link is more appropriate.**

### Recommendations

* Use buttons to move though a transaction.
* Aim to use only one button per page.
* Avoid excessively long button text.
* Make sure the button text describes an action.

By default, Buttons will be displayed in the `primary` variant.

```
<Button>Submit</Button>
```

## Variants
```
<div style={{backgroundColor: "blue", padding: "10px"}}>
  <div>
    <Button variant="primary">Submit</Button>
    <Button variant="primary" invert>Submit</Button>
  </div>
  <div>
    <Button variant="secondary">Reset</Button>
    <Button variant="secondary" invert>Reset</Button>
  </div>
  <div>
    <Button variant="outlined">Go back</Button>
    <Button variant="outlined" invert>Go back</Button>
  </div>
</div>
```

## Inverted
```
<div style={{backgroundColor: "blue", padding: "10px"}}>
  <Button variant="primary" invert>Submit</Button>
  <Button variant="secondary" invert>Reset</Button>
  <Button variant="outlined" invert>Go back</Button>
</div>
```
