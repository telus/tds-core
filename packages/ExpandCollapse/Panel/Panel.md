#### Superscript and HTML entities

`header` accepts a templating syntax to allow for superscripts and ™ and ® HTML entities.

- To use superscripts, wrap the content to be superscripted with double caret (`^^`), it will be replaced with `<Text.Sup>`.
- To use one of the supported HTML entities, use the Entity Name anywhere in the string and it will be replaced with the corresponding HTML entity.

| Entity Name | Sign | Description                 |
| ----------- | ---- | --------------------------- |
| `&trade;`   | ™    | Trademark symbol            |
| `&reg;`     | ®    | Registered Trademark symbol |

Example:

```jsx
<ExpandCollapse>
  <ExpandCollapse.Panel id="OptikTV" header="TELUS Optik TV^^&trade;^^">
    <Box between={2}>
      <Heading level="h4">Optik TV makes it easy to watch YouTube in 4K</Heading>
      <Paragraph size="medium">
        With the Optik 4K digital box, watch popular YouTube videos and channels in HD and stunning
        4K directly from the Optik channel guide.6
      </Paragraph>
    </Box>
  </ExpandCollapse.Panel>
  <ExpandCollapse.Panel id="PikTV" header="TELUS Pik TV^^&reg;^^">
    <Box between={2}>
      <Heading level="h4">Stream live TV on any screen with Pik TV</Heading>
      <Paragraph size="medium">
        Stream your favourite TV shows and On Demand movies on any screen with TELUS Pik TV,
        starting from just $5 a month. Get your first 3 months for $0 when you sign up for Pik TV
        and TELUS Internet for 2 years.
      </Paragraph>
    </Box>
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

See [ExpandCollapse](#expandcollapse) above for usage of `Panel`.
