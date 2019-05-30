### Usage criteria

- In an instance when there is another sticky item on the page (i.e the cart summary unexpanded/collapsed), the `Footnote` must be layered on top of that
- Can be dismissed by clicking the close button, clicking anywhere outside of the Footnote, or by pressing `ESCAPE`

### Accessibility requirements

- Only one `Footnote` component should ever exist on a page at a time
- The `Footnote` component must be the last child in the `body` or `main`
  - When the `Footnote` is opened, the `inert` prop must be set on all children of `body` excluding the `Footnote`
- When the `Footnote` is closed, focus must be returned to the initiating element. See example below

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
    this.setState({ showFootnote: false })
    this.state.returnRef.current.focus()
  }

  handleFootnoteLinkClick(number, content, returnRef) {
    this.setState({ number, content, showFootnote: true, returnRef })
  }

  render() {
    const content = [
      'Taxes and pay-per-use charges (including long distance, roaming and additional airtime or data) are extra. The cost of voice service used while roaming outside Canada will vary by zone. Currently, voice roaming in the US is charged at $1.50/minute. Visit telus.com/mobilityppu for details. Plus applicable provincial or municipal government 911 fees in Nova Scotia (43¢), PEI (70¢), New Brunswick (53¢), Saskatchewan (94¢), Quebec (46¢), Alberta (44¢), and Newfoundland and Labrador (75¢). Additional data usage will be charged to the subscriber using the data at $10/100 MB. The cost of data used while roaming outside Canada will vary by zone. Visit telus.com/mobilityppu for details. Data usage during a single billing cycle may be capped at 10 GB. Additional usage may be authorized by calling TELUS to remove the data block. Tethering included. Access to BlackBerry Enterprise Service is not included.',
      'Taxes and pay-per-use charges (including roaming and additional data) are extra. For any subscriber(s) with a Your Choice Canada-US plan, roaming pay-per-use.',
    ]

    return (
      <Text>
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
          number={this.state.number}
          content={this.state.content}
          onClose={e => {
            this.handleClose(e)
          }}
          isOpen={this.state.showFootnote}
        />
      </Text>
    )
  }
}
;<FootnoteExample />
```
