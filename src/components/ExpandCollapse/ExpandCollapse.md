```
<ExpandCollapse>
  <ExpandCollapse.Panel id="panel-1" header="First panel title">
    First panel
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="panel-2" header="Second panel title" subtext="Some subtext">
    Second panel
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

### Arbitrary header component

```
<ExpandCollapse>
  <ExpandCollapse.Panel id="panel-10" header={<Text size="large">I'm large and misligned</Text>}>
    First panel
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
  <ExpandCollapse.Panel id="panel-31" header="Second panel title" subtext="Some subtext">
    Second panel
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

### Accordions

```
const Accordion = require('./Accordion/Accordion').default;

<Accordion>
  <Accordion.Panel id="panel-40" header="First panel title">
    First panel
  </Accordion.Panel>
  <Accordion.Panel id="panel-41" header="Second panel title" subtext="Some subtext">
    Second panel
  </Accordion.Panel>
</Accordion>
```
