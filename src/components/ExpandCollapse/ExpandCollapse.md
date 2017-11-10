```
<ExpandCollapse>
  <ExpandCollapse.Panel id="panel-1" header="First panel title">
    First panel
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="panel-2" header="Second panel title" subtext="Some subtext">
    Second panel
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="panel-3" header="Third panel title" subtext="Some subtext" tertiaryText="$100">
    Third panel
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

### Adjusting height

```
initialState = {
  error: '',
};

const trigger = () => {
  if( state.error === '' ) {
    setState({error: 'Oh no there was an error'});
  }
  else {
    setState({error: ''});
  }
};

<ExpandCollapse open={['panel-21']}>
  <ExpandCollapse.Panel id="panel-20" header="First panel title">
    First panel
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="panel-21" header="Second panel title">
    <div>
      <Paragraph>Second panel blah blah blah</Paragraph>
      
      <Button onClick={trigger}>Trigger</Button>
      
      <Input label="Testing" error={state.error} />
    </div>
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

### Disabled

```
<ExpandCollapse>
  <ExpandCollapse.Panel id="panel-30" header="First panel title" disabled>
    First panel
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="panel-31" header="Second panel title">
    Second panel
  </ExpandCollapse.Panel>
</ExpandCollapse>
```
