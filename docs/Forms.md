### Best practices for forms

#### <a name="form-required-and-optional"></a> Required and optional form fields

- Form fields should be required. Avoid optional form fields whenever possible, if necessary, add “(optional)” within the Label or Hint
- Use the feedback prop to indicate required fields. See [Input](#input) for more information on getting feedback for entered values
- Implement additional validation requirements on the application level (i.e. checking if data entered into a phone number field is a valid phone number)
- Make forms simple and easy for customers to volunteer their information. Limit the amount of form fields needed for the customer to quickly complete their task
- Provide clear reasons and expectations as to why we’re requesting particular information. For example, asking for an optional subscriber name will help the user manage multiple subscribers which are shown by number. We can alleviate customer anxiety by providing the context for that form field. See [Input](#input) for more information on supplying a hint

#### <a name="form-disabled-state"></a> Disabled state on selections

While we don't encourage the use of disabled selections, we understand that there are instances where disabled selections are needed. When using disabled selections it needs to be clear to the user why the selection is disabled and what they need to do to enable the disabled selection. This applies to the core [Checkbox](#checkbox), [Input](#input), [Select](#select) and [Radio](#radio) components only.
