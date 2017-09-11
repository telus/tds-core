```
<div>
  <Input label="First name (default)" />

  <Input type="password" label="Password" value="123abc" />
  <Input type="number" label="Age" value="32" />

  <Input label="First name (auto focus)" autoFocus />

  <Input label="First name (disabled)" disabled />

  <Input label="First name (success)" feedback="success" />
  <Input label="First name (error)" feedback="error" />

  <Input label="First name (error msg)" feedback="error" error="First name is required" />

  <Input label="First name (helper)" feedback="success"
    helper={<Input.Helper>Some helper stuff</Input.Helper>}
  />
</div>
```
