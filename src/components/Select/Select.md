
### Usage criteria

* Selects should be used sparingly where possible or need to reduce space on forms etc. (Work with design for specifics)
* Selects should have instructions such as "Please select…" as a default option but not able to be selected.
* Selects are most appropriate when there are 4 or more choice. Less than 4, checkboxes or radios are more appropriate.

```
const info = (
  <Text>
    We have special promotions in <Text bold>British Columbia, Ontario and Quebec</Text>.
  </Text>
);

<Select 
  label="Select your province"
  helper={info}
  options={[{text: 'British Columbia', value: 'BC'}, {text: 'Ontario', value: 'ON'}, {text: 'Quebec', value: 'QC'}]}
  onChange={e => console.log(e.target.value)}
/>
```
