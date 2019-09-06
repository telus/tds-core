### <a name="form-disabled-state"></a> Disabled state on selections

While we don't encourage the use of disabled selections, we understand that there are instances where disabled selections are needed. When using disabled selections, it needs to be clear to the user why the selection is disabled and what they need to do to enable the disabled selection. This applies to the core [Checkbox](#checkbox), [Input](#input), [TextArea](#textarea), [Select](#select), and [Radio](#radio) components only.

### <a name="optional-required-fields"></a> Optional vs Required form fields

TELUS Design System doesn't provide an upfront visual distinction between optional and required form fields. However, a `feedback` prop can be added to required fields. This, along with a validation that needs to be implemented on the application level, can alert a user of the required field. A demonstration is available in the [getting feedback for entered values](#form-field-feedback) example.
