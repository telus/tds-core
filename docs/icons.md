```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/icon">
        Icons
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Available icons

```jsx
<Box inline between={3}>
  <DecorativeIcon symbol="caretDown" />
  <DecorativeIcon symbol="caretUp" />
  <DecorativeIcon symbol="checkmark" />
  <DecorativeIcon symbol="leftChevron" />
  <DecorativeIcon symbol="chevron" />
  <DecorativeIcon symbol="exclamationPointCircle" />
  <DecorativeIcon symbol="expander" />
  <DecorativeIcon symbol="hamburger" />
  <DecorativeIcon symbol="location" />
  <DecorativeIcon symbol="minus" />
  <DecorativeIcon symbol="plus" />
  <DecorativeIcon symbol="questionMarkCircle" />
  <DecorativeIcon symbol="spyglass" />
  <DecorativeIcon symbol="times" />
</Box>
```

### Modifying colour

Use the `variant` prop to alter the icon's colour. Each variant has semantic meaning.

```jsx
<Box inline between={3}>
  <DecorativeIcon symbol="checkmark" variant="primary" />
  <DecorativeIcon symbol="times" variant="secondary" />
  <DecorativeIcon symbol="exclamationPointCircle" variant="error" />
</Box>
```

### Adjusting size

Use the `size` prop to adjust the icon's size.

#### Usage Criteria

- Use the following sizes when applicable:
  - 16px: Chevrons/Carets (visually 8x12px); Check (visually 14x14px) and Times (visually 12x12px) are in 16px containers
  - 20px: For subnav with text (ie. My TELUS)/ Notification icons
  - 24px: Benefit List icons
  - 32px: For a list of benefits that has five or more items; cannot utilize benefit list and needs to span full width. See design example below
  - 48px: For service callouts; use between 3-4 icons in the same section
- General usage guideline is to refrain from using more than 2 sizes on one UX flow for consistency
- Icons used within the same section needs to be the same size
- Exceptions can be made if a page also requires notifications
- If the icons are too similar in size (ie. 20px + 24px) it is recommended to stick to one size

```jsx noeditor
<Box vertical={3} />
```

#### 16px Example

```jsx noeditor
<Box vertical={2} />
  <FlexGrid>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12} md={6}>
        <Box between={2}>
          <Paragraph bold>
            Check (visually 14x14px) and times (visually 12x12px), but their transparent box sizes
            are 16px
          </Paragraph>
          <UnorderedList size="large">
            <UnorderedList.Item itemStyle="checkmark">
              Unordered list item, large
            </UnorderedList.Item>
            <UnorderedList.Item itemStyle="checkmark">
              Unordered list item, large
            </UnorderedList.Item>
            <UnorderedList.Item itemStyle="checkmark">
              Unordered list item, large
            </UnorderedList.Item>
            <UnorderedList.Item itemStyle="x">Unordered list item, large</UnorderedList.Item>
            <UnorderedList.Item itemStyle="x">Unordered list item, large</UnorderedList.Item>
          </UnorderedList>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={6}>
        <Box between={2}>
          <Paragraph bold>
            Visually the chevrons are 8x12px, but their transparent box sizes are 16px
          </Paragraph>
          <ChevronLink href="#">ChevronLink Primary</ChevronLink>
          <Box below={4}/>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
<Box below={6}/>
```

#### 20px Example

```jsx noeditor
<Box vertical={2} />
  <FlexGrid>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12} md={6}>
        <Notification variant="error">
          <Paragraph bold>
            Your invitation to register online has expired. Please contact us and we'll help you get
            set up.
          </Paragraph>
        </Notification>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={6}>
        <Notification variant="success">
          <Paragraph bold>Your password has been successfully changed.</Paragraph>
        </Notification>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
<Box below={6}/>
```

#### 24px Example

```jsx noeditor
<Box vertical={2}/>
  <Box horizontal={3}>
    <BenefitNoHeading icon={Baby}>
      <BenefitNoHeading.Item>This Benefit List has a purple icon</BenefitNoHeading.Item>
      <BenefitNoHeading.Item>Must use this outside of a card</BenefitNoHeading.Item>
      <BenefitNoHeading.Item>Must always use purple for the icon</BenefitNoHeading.Item>
      <BenefitNoHeading.Item>35 character limit for all the text</BenefitNoHeading.Item>
    </BenefitNoHeading>
  </Box>
<Box below={6}/>
```

#### 32px Example

```jsx noeditor
<Box vertical={2}/>
<Box horizontal={3}>
  <Box vertical={2}>
    <Heading level="h2">All plans include</Heading>
  </Box>
  <FlexGrid>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Globe1 size={32} />
          <Paragraph>Unlimited nationwide calls</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Chat1 size={32} />
          <Paragraph>Unlimited nationwide texts</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Photos size={32} />
          <Paragraph>Unlimited nationwide picture and video messaging</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Record size={32} />
          <Paragraph>Voicemail 25</Paragraph>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
    <FlexGrid.Row>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Mobility size={32} />
          <Paragraph>Call display</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <CallTalking size={32} />
          <Paragraph>Call waiting</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <Networking size={32} />
          <Paragraph>Conference calling</Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={3}>
        <Box between={3} vertical={3} inline>
          <CallForward size={32} />
          <Paragraph>Call forwarding</Paragraph>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
  </Box>
<Box below={6}/>
```

#### 48px Example

```jsx noeditor
<Box vertical={2}/>
  <FlexGrid>
    <FlexGrid.Row horizontalAlign="center">
      <FlexGrid.Col xs={12} md={4}>
        <Box between={2}>
          <Box vertical={2}>
            <ChatSupport size={48} />
          </Box>
          <Paragraph align="center" bold>
            Type something
          </Paragraph>
          <Paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dui nisi.
          </Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={4}>
        <Box between={2}>
          <Box vertical={2}>
            <Delivery size={48} />
          </Box>
          <Paragraph align="center" bold>
            Type something
          </Paragraph>
          <Paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dui nisi.
          </Paragraph>
        </Box>
      </FlexGrid.Col>
      <FlexGrid.Col xs={12} md={4}>
        <Box between={2}>
          <Box vertical={2}>
            <Chat1 size={48} />
          </Box>
          <Paragraph align="center" bold>
            Type something
          </Paragraph>
          <Paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dui nisi.
          </Paragraph>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
<Box below={6}/>
```
