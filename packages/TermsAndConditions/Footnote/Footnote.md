```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/footnote">
        Footnote
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

- In an instance when there is another sticky item on the page (i.e the cart summary unexpanded/collapsed), the `Footnote` must be layered on top of that
- Can be dismissed by clicking the close button, clicking anywhere outside of the Footnote, or by pressing `ESCAPE`

### Accessibility requirements

- Only one `Footnote` component should ever exist on a page at a time
- The `Footnote` component must be the last child in the `body` or `main`
  - When the `Footnote` is opened, the `inert` prop must be set on all children of `body` excluding the `Footnote`
- When the `Footnote` is closed, focus must be returned to the initiating element. See example below

### Available HTML tags

Some HTML tags are available in `Footnote` to fulfill some formatting requirements.

| HTML Tag | Effect                                                       |
| -------- | ------------------------------------------------------------ |
| `<a>`    | Generates a TDS link component, copying the tag's attributes |
| `<br>`   | Generates a normal HTML break tag (typically used for lists) |

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

  handleClose(e, options) {
    this.setState({ showFootnote: false })
    if (options.returnFocus) {
      this.state.returnRef.current.focus()
    }
  }

  handleFootnoteLinkClick(number, content, returnRef) {
    this.setState({
      number,
      content,
      showFootnote: true,
      returnRef: Object.assign({}, returnRef),
    })
  }

  render() {
    const content = [
      'Taxes and pay-per-use charges (including long distance, roaming and additional airtime or data) are extra. The cost of service used while roaming outside Canada will vary by zone. <br/><br/>a. Currently, voice roaming in the US is charged at: $1.50/minute<br/>b. Visit <a href="https://telus.com/mobilityppu">telus.com/mobilityppu</a> for details.',
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
          onClose={(e, options) => {
            this.handleClose(e, options)
          }}
          isOpen={this.state.showFootnote}
        />
      </Text>
    )
  }
}
;<FootnoteExample />
```
