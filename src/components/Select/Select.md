### Usage criteria

* Include a `placeholder` to provide instructions such as "Please select…" as an unselectabale option (recommended) 
* Selects are most appropriate when there are at least 4 choices. Checkboxes or radio groups are more appropriate for 
less than 4.

```
<Select 
  label="Province"
  placeholder="Please select..."
  options={[{text: 'Alberta', value: 'AB'}, {text: 'British Columbia', value: 'BC'}, {text: 'Ontario', value: 'ON'}, {text: 'Quebec', value: 'QC'}]}
/>
```
