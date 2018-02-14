```
<ExpandCollapse>
  <ExpandCollapse.Panel id="features" header="Features">
    <Box between={3}>
      <Box between={2}>
        <Heading level="h4">Connected GPS</Heading>
        <Paragraph size="medium">
          Connect to your phone's GPS to see real-time run stats.
        </Paragraph>
      </Box>

      <Box between={2}>
        <Heading level="h4">Notifications</Heading>
        <Paragraph size="medium">
          See call, text and calendar alerts on your wrist.
        </Paragraph>
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

```
<div>
  <Heading level="h2">Charges on this new bill</Heading>

  <ExpandCollapse topDivider={false}>
    <ExpandCollapse.Panel
      id="monthly-plan"
      header="Monthly Home Phone plan" subtext="Jul 10-Aug 9" tertiaryText="$20.50"
    >
      <Box between={3}>
        <Paragraph size="medium">
          TELUS Home Phone $20.00
          <br />
          <Text size="small">Includes Local Line, Call Display, and Voice Mail</Text>
        </Paragraph>

        <Paragraph size="medium">
          E 9-1-1 Provincial Network Fee $0.50
        </Paragraph>
      </Box>
    </ExpandCollapse.Panel>

    <ExpandCollapse.Panel
      id="additional-charges"
      header="Additional charges and credits" subtext="Jun 10-Jul 9" tertiaryText="$7.50"
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
