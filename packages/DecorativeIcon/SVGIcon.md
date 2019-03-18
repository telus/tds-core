### Naming Convention

The convention for icon names is to capitalize the beginning of each word or abbreviation.
For example the icon for Remote control is `RemoteControl`, the icon for USB cable is `UsbCable` and the icon for TV is `Tv`

```jsx
<Box between={3}>
  <Text>
    <RemoteControl /> Remote control
  </Text>

  <Text>
    <UsbCable /> USB cable
  </Text>
  <Text>
    <Tv /> TV
  </Text>
</Box>
```

The variants `default`, `alternative` and `inverted` can be used based on the design of the context in which the icon lives.

```jsx
<Box between={3}>
  <Text>
    <Accessible variant="alternative" /> Accessibility is key
  </Text>
  <Text>
    <Heart variant="default" size={48} /> This is a big heart
  </Text>
</Box>
```

Check out the table below a full list of SVG Icons and their usage guidelines.

```jsx noeditor
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Products and Services</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>mobility </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Mobility />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For mobility/cellphone </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>internet </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Internet />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For internet, wifi, wifi connectivity </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>tv </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Tv />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For television </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>phone </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Phone />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For phone </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>deals </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Deals />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used when there are discounts/deals/promotion </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Internet</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>speed </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Speed />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Speed of service </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>dataLimit </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <DataLimit />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Data limitations </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>wifiBoost </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <WifiBoost />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Wifi boost</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Optik TV / Pik TV</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>onDemand </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <OnDemand />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>TV on demand </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>onTheGo </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <OnTheGo />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>TV on the go </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>channels </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Channels />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Channels</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>favouriteNetwork </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <FavouriteNetwork />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Favourite network</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>remoteControl </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <RemoteControl />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Controlled by remote control</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Home Security</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>securityCamera </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SecurityCamera />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Security cameras</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>securityMobile </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SecurityMobile />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Mobile security</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>securitySettings </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SecuritySettings />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Security settings</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>securityHouse </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SecurityHouse />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Secure house</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Mobility / Home Phone</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>simCard </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SimCard />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>SIM Card</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>callForward </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CallForward />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Unlimited call forward</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>callTalking </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CallTalking />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Phone in use</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>call </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Call />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Phone not in use</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>callReceive </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CallReceive />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Call receive</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>callOut </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CallOut />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Outwards call</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>messaging </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Messaging />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Messaging</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>videoChat </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <VideoChat />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Video Chat</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>phoneReception </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <PhoneReception />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Phone reception</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>signal </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Signal />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Signal</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Business</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>uploadToCloud </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <UploadToCloud />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Upload to cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>cloudSync </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CloudSync />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Sync to cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>computerNetwork </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ComputerNetwork />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Computer network</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>privateCloud </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <PrivateCloud />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Cloud is private</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>wifiCloud </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <WifiCloud />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Wifi-cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>phoneBusiness </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <PhoneBusiness />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Business connect, default business wireline </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>nextGenFirewall </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <NextGenFirewall />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used in conjunction with Next Generation firewall service</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>artificialIntelligence </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ArtificialIntelligence />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Artificial Intelligence</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">Health</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>baby </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Baby />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>baby, children, male or female</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>babyBoy </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <BabyBoy />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>baby, children, male</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>babyGirl </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <BabyGirl />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>baby, children, female</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>medical </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Medical />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>health, medical</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>

  <FlexGrid.Row>
    <FlexGrid.Col>
      <Box vertical={3}>
        <Heading level="h3">General Icons</Heading>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text bold>Symbol </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Icon </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text bold>Usage Criteria </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>home </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Home />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For the home produdcts/services or a service that can be done at home </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationRegular </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationRegular />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used as an indication for location or address </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationAdd </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationAdd />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>When an address is needed or if a user has the option to add a location </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationVerified </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationVerified />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>When a validated address has been added</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationRemove </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationRemove />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>When there is an option to remove location </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationHome </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationHome />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used to indicate that the location is the home address </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>support </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Support />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Customer support, FAQs</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>warranty </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Warranty />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For when warranty or repair is available/required</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>calendar </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Calendar />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        For indicating a date, if something is time sensitive, or if a service requires scheduling{' '}
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>award </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Award />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>"Best in class" or have won an award </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>delivery </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Delivery />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Delivery is available or required – not to be confused with service truck </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>success </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Success />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        For validating that the information added has been processed and is successful, ready for
        cart review in check out{' '}
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>piggyBank </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <PiggyBank />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For saving, reduction, money credit back, online bill credit </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>settings </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Settings />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For settings, troubleshooting, technical support </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>speakerPhone </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SpeakerPhone />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Announcements</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>bell </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Bell />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Alarm, time sensitive, used as notifications (like Facebook)</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>bill </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Bill />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Paper bill and e-bill, summary of your bill </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>arrowUp </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ArrowUp />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Upwards direction, price increase</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>arrowDown </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ArrowDown />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Downwards direction, price descrease</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>creditCard </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CreditCard />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Credit card (not debit)</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>bank </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Bank />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Direct debit (not credit) </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>heart </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Heart />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used to favourite items (will need toggle versions in future) </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>lightbulb </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Lightbulb />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Tips, smart lightbulbs </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>globe1 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Globe1 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>TELUS international, map and locations (America's specific) </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>globe2 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Globe2 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>TELUS international, can be used to indicate network </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>lockClosed </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LockClosed />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Set and locked, cannot be altered or changed </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>lockOpened </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LockOpened />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Can be altered or changed </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>user </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <User />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        Information of the user including but not limited to first and last name, address, email{' '}
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chat1 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Chat1 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Contact support through chat/messages on TELUS.com </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chat2 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Chat2 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Alternative to chat1, contact support through chat/messages on TELUS.com </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>cloudDownload </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CloudDownload />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Download through cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>cloudUpload </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <CloudUpload />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Upload through cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>diagram </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Diagram />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Diagram, mapping </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>direction </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Direction />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>direction, traffic</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>download </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Download />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>download through cloud</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>upload </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Upload />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Upload</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>headFemale </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <HeadFemale />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>user, profile, female user </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>firewall </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Firewall />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>firewall, verified security</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>idTag </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <IdTag />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>ID, verification of person </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>infinite </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Infinite />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>infinite </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>headMale </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <HeadMale />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>user, profile, group </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>headBoth </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <HeadBoth />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>user, profile, male user </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>map </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      {/**
       * This is a workaround for reserved names
       * that cannot be overridden in globalComponents.js
       */
      typeof MapIcon === 'undefined' ? <Map /> : <MapIcon />}
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>map, travel, gps</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>play </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Play />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>play, video alternative </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>preference </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Preference />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>preference, settings alternative </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>radar </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Radar />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Radar, travel (land and sea search) </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>receipt </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Receipt />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>receipt, e-billing </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>server </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Server />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>server </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>shop </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Shop />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>shop, store </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>clipboard </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      {typeof ClipboardIcon === 'undefined' ? <Clipboard /> : <ClipboardIcon />}
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For information or forms</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>tasks </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Tasks />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>tasks, checklist, alternative to clipboard</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>transmitter </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Transmitter />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>electricity, transmitter tower </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>loginForm </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LoginForm />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Login form </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chatSupport </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ChatSupport />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Can reach a person on the support team to help with any issues</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>backToSchool </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <BackToSchool />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Back to school deals or promotions, recommended</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>gift </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Gift />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Gift promotion that comes with the product or service</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>users </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Users />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Available for more than one user </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>devices </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Devices />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>compatible/for smart devices </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>lifesaver </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Lifesaver />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For crucial information or that you will get help in the section </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>thumbsUp </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ThumbsUp />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Indicates that something is liked or recommended</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>tablet </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Tablet />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Compatible/for tablets</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>laptop </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Laptop />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For laptops/computers/desktop </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>router </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Router />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Requires a router or a router is available </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>watch </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Watch />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Smart watches, fitness watches </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>phone </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Phone />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Phone </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>videoGames </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <VideoGames />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>For video games including virtual reality, connected games, etc </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>camera </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Camera />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Indicates that a photo is required or suggested; used in My TELUS profile </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>news </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <News />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        Announcements or news related to events, press releases, changes that may or may not affect
        the user
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>flag </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Flag />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        3rd option, not alert, not a favourite but want to mark (may need on and off toggle)
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>email </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Email />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        Indicates that an email can be sent to share information with yourself or others; an email
        is required.
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>photo </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Photo />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Photo/image</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chartsBar1 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ChartsBar1 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Reports, data usage, dashboards</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chartsBar2 </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ChartsBar2 />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Reports, data usage, dashboards</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>chartsLine </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ChartsLine />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Reports, data usage, dashboards</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>collaboration </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Collaboration />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Collaboration, IoT</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>locationMap </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <LocationMap />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        Another way to indicate location of something; can use location map or location icon. Cannot
        be used ON a map
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>signPost </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SignPost />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Drive+, car related, GPS</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>compass </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Compass />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Indicates directions, Drive+, car related, GPS, travel</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>key </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Key />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Password, key</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>information </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Information />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Indicates extra information</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>attention </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Attention />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used when alerting user of changes or simply to alert them</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>bookmark </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Bookmark />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>
        Used to bookmark a page or callout a product or service as being popular or recommended
      </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>serviceTruck </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <ServiceTruck />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Set up is required or available to set the product/service up</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>time </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Time />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Time; for scheduling</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>fingerprint </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Fingerprint />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Unique/personalized service, security</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>music </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Music />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Music, Stingray music channels (Optik TV)</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>files </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Files />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>More than one document</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>document </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      {typeof DocumentIcon === 'undefined' ? <Document /> : <DocumentIcon />}
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Single document</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>layers </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Layers />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Plans, channels, theme packs</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>target </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Target />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Target market, precision, focus, business targets</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>heart </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Heart />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Health related </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>usbCable </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <UsbCable />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Device can be connected with a USB or requires a USB cable to work</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>headset </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Headset />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Headsets; requires or recommends headsets</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>speaker </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Speaker />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Speakers; can be interchanged with headset </Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>refresh </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Refresh />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Page/section refresh</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>record </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Record />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Voicemail</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>visible </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Visible />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Visible informaton</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>invisible </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Invisible />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Invisible information</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>sharedAccount </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <SharedAccount />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Account is shared</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>addUser </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <AddUser />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>User can be added</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>batteryCharging </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <BatteryCharging />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Battery charging</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>contract </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Contract />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Contract</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>briefcase </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Briefcase />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Business</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>alarmClock </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <AlarmClock />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Time sensitive</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>suitcase </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Suitcase />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Travel</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>cronometer </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Cronometer />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Used when comparing speeds</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>photos </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Photos />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Images, photos, albums</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>office </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Office />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>office, address</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>passport </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Passport />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>travel, document verification</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>networking </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Networking />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Networking</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
  <FlexGrid.Row>
    <FlexGrid.Col>
      <Text>accessible </Text>
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Accessible />
    </FlexGrid.Col>
    <FlexGrid.Col>
      <Text>Accessible</Text>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
