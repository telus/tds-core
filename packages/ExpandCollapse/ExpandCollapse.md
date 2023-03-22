```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/expand-collapse">
        ExpandCollpase
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

The `ExpandCollapse` and `Accordion` component allows nesting of content inside a collapsible container. Activating the header will reveal the hidden content by expanding the container.

- Carefully consider the type of content to hide and reveal with motion
- Use static content within Panels such as text, links, and images
- Avoid complex interactions within Panels such as tabs, carousels or nested accordions. The extra layers make it confusing and difficult for customers to orient themselves. The customer needs to be able to navigate to other parts of the page after the content is expanded
- May display as a non-interactive `ExpandCollapse` heading
  - Don’t include content in the `ExpandCollapse.Panel` to display a non-interactive heading without the hide and reveal functionality, and not displaying the Caret icon
  - Limit use to displaying a list of product items

### Minimal usage

```jsx
<ExpandCollapse tag="h2">
  <ExpandCollapse.Panel id="features" header="Features">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Connected GPS</Heading>
        <Paragraph size="medium">Connect to your phone's GPS to see real-time run stats.</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Notifications</Heading>
        <Paragraph size="medium">See call, text and calendar alerts on your wrist.</Paragraph>
      </Box>
    </Box>
  </ExpandCollapse.Panel>

  <ExpandCollapse.Panel id="specs" header="Specifications">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Display</Heading>
        <Paragraph size="medium">OLED</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Battery Life</Heading>
        <Paragraph size="medium">Up to 5 days</Paragraph>
      </Box>
    </Box>
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

Example using `compact` prop.

```jsx
<ExpandCollapse compact tag="h2">
  <ExpandCollapse.Panel id="features" header="Features">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Connected GPS</Heading>
        <Paragraph size="medium">Connect to your phone's GPS to see real-time run stats.</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Notifications</Heading>
        <Paragraph size="medium">See call, text and calendar alerts on your wrist.</Paragraph>
      </Box>
    </Box>
  </ExpandCollapse.Panel>

  <ExpandCollapse.Panel id="specs" header="Specifications">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Display</Heading>
        <Paragraph size="medium">OLED</Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Battery Life</Heading>
        <Paragraph size="medium">Up to 5 days</Paragraph>
      </Box>
    </Box>
  </ExpandCollapse.Panel>
</ExpandCollapse>
```

```jsx
<div>
  <Heading level="h2">Charges on this new bill</Heading>

  <ExpandCollapse topDivider={false} tag="h2">
    <ExpandCollapse.Panel
      id="monthly-plan"
      header="Monthly Home Phone plan"
      subtext="Jul 10-Aug 9"
      tertiaryText="$20.50"
    >
      <Box between={3}>
        <Paragraph size="medium">
          TELUS Home Phone $20.00
          <br />
          <Text size="small">Includes Local Line, Call Display, and Voice Mail</Text>
        </Paragraph>

        <Paragraph size="medium">E 9-1-1 Provincial Network Fee $0.50</Paragraph>
      </Box>
    </ExpandCollapse.Panel>

    <ExpandCollapse.Panel
      id="additional-charges"
      header="Additional charges and credits"
      subtext="Jun 10-Jul 9"
      tertiaryText="$7.50"
    >
      <Box between={3}>
        <Paragraph size="medium">
          Pay-per-minute Long Distance
          <br />
          <Text size="small">8 calls, 133:00 mins $7.50</Text>
        </Paragraph>

        <Paragraph size="medium">
          LD Network Access Charge
          <br />
          <Text size="small">0 calls, 0:00 mins, $0.00</Text>
        </Paragraph>
      </Box>
    </ExpandCollapse.Panel>
  </ExpandCollapse>
</div>
```

Example of a list of product items displaying points or price information as a series of `ExpandCollapse` panels. A non-interactive `ExpandCollapse.Panel` can be used to arrange items and their corresponding numerals consistently.

```jsx
<ExpandCollapse topDivider={false} tag="h2">
  <ExpandCollapse.Panel
    id="home-service-billing"
    header="Home service billing (3)"
    subtext="10/06/2019"
    tertiaryText="14.82 points"
  >
    <Box between={3}>
      <Box between="space-between" inline>
        <Paragraph size="medium">Home Phone</Paragraph>
        <Paragraph size="medium">1.73 points</Paragraph>
      </Box>
      <Box between="space-between" inline>
        <Paragraph size="medium">High Speed Internet</Paragraph>
        <Paragraph size="medium">1.59 points</Paragraph>
      </Box>
      <Box between="space-between" inline>
        <Paragraph size="medium">Optik TV</Paragraph>
        <Paragraph size="medium">11.50 points</Paragraph>
      </Box>
    </Box>
  </ExpandCollapse.Panel>

  <ExpandCollapse.Panel
    id="monthly-mobility-bonus"
    header="Monthly mobility bonus"
    subtext="05/06/2019"
    tertiaryText="2.66 points"
  />
</ExpandCollapse>
```
