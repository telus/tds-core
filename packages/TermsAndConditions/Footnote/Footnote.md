### Usage criteria

```jsx
class FootnoteExample extends React.Component {
  constructor(props) {
    super(props)
    this.footnoteRef1 = React.createRef()
    this.footnoteRef2 = React.createRef()

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
    const number = 3
    const content =
      'Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice.Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice. Available for new activations and renewals on a 2-year term with any rate plan with a minimum monthly spend of $55/mo. TELUS reserves the right to modify prices and eligible rate plans with this offer at any time without advance notice.'

    return (
      <div>
        Terms and conditions may apply
        <FootnoteLink
          number={2}
          ref={this.footnoteRef1}
          onClick={() => {
            this.handleFootnoteLinkClick(2, 'small content', this.footnoteRef1)
          }}
        />
        <FootnoteLink
          number={number}
          ref={this.footnoteRef2}
          onClick={() => {
            this.handleFootnoteLinkClick(number, content, this.footnoteRef2)
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
