## Usage criteria

* Include a `placeholder` to provide instructions such as "Please select…" as an unselectabale option (recommended) 
* Use when options are between 7-15 (recommended)
* For options are 6 and under, use [`radio`](#radio) groups
* For options 15 and above, look for alternatives (e.g grouping into categories, or input field with auto-complete etc.) 

<a href=“https://baymard.com/blog/drop-down-usability” target="_blank">Reference</a>

```
<Select 
  label="Province"
  placeholder="Please select..."
  options={[{text: 'Alberta', value: 'AB'}, {text: 'British Columbia', value: 'BC'}, {text: 'Ontario', value: 'ON'}, {text: 'Quebec', value: 'QC'}]}
/>
```
