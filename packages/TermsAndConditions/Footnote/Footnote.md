### Usage criteria

- In an instance when there is another sticky item on the page (i.e the cart summary unexpanded/collapsed), the `Footnote` will be layered on top of that
- Can be dismissed by clicking the close button, clicking anywhere outside of the Footnote, or by pressing `ESCAPE`
- Only one `Footnote` component should ever exist on a page at a time

```jsx
class FootnoteExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: null,
      content: null,
      showFootnote: false,
      returnRef: null,
    }
  }

  handleClose(e) {
    if (
      (e.type === 'click' || e.type === 'mousedown') &&
      e.target.getAttribute('data-tds-id') === 'footnote-link'
    ) {
    } else {
      this.setState({ showFootnote: false })
    }
  }

  handleFootnoteLinkClick(number, content, returnRef) {
    this.setState({ number, content, showFootnote: true, returnRef })
  }

  render() {
    const content = [
      'Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice.',
      'Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo.',
    ]

    return (
      <div>
        Terms and conditions may apply
        <FootnoteLink
          copy="en"
          number={[1, 2]}
          onClick={(number, ref) => {
            this.handleFootnoteLinkClick(number, content[number - 1], ref)
          }}
        />
        <Footnote
          copy="en"
          returnRef={this.state.returnRef}
          number={this.state.number}
          content={this.state.content}
          onClose={e => {
            this.handleClose(e)
          }}
          isOpen={this.state.showFootnote}
        />
      </div>
    )
  }
}
;<FootnoteExample />
```
