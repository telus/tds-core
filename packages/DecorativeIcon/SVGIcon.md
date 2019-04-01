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
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<Box between={3}>
  <IconTable
    heading="Products and Services"
    icons={[
      {
        name: 'mobility',
        Component: Mobility,
        usageCriteria: 'For mobility/cellphone',
      },
      {
        name: 'internet',
        Component: Internet,
        usageCriteria: 'For internet, wifi, wifi connectivity',
      },
      {
        name: 'tv',
        Component: Tv,
        usageCriteria: 'For television',
      },
      {
        name: 'phone',
        Component: Phone,
        usageCriteria: 'For phone',
      },
      {
        name: 'deals',
        Component: Deals,
        usageCriteria: 'Used when there are discounts/deals/promotion',
      },
    ]}
  />

  <IconTable
    heading="Internet"
    icons={[
      {
        name: 'speed',
        Component: Speed,
        usageCriteria: 'Speed of service',
      },
      {
        name: 'dataLimit',
        Component: DataLimit,
        usageCriteria: 'Data limitations',
      },
      {
        name: 'wifiBoost',
        Component: WifiBoost,
        usageCriteria: 'Wifi Boost',
      },
    ]}
  />

  <IconTable
    heading="Optik TV / Pik TV"
    icons={[
      {
        name: 'onDemand',
        Component: OnDemand,
        usageCriteria: 'TV on demand',
      },
      {
        name: 'onTheGo',
        Component: OnTheGo,
        usageCriteria: 'TV on the go',
      },
      {
        name: 'channels',
        Component: Channels,
        usageCriteria: 'Channels',
      },
      {
        name: 'favouriteNetwork',
        Component: FavouriteNetwork,
        usageCriteria: 'Favourite network',
      },
      {
        name: 'remoteControl',
        Component: RemoteControl,
        usageCriteria: 'Controlled by remote control',
      },
    ]}
  />

  <IconTable
    heading="Home Security"
    icons={[
      {
        name: 'securityCamera',
        Component: SecurityCamera,
        usageCriteria: 'Security cameras',
      },
      {
        name: 'securityMobile',
        Component: SecurityMobile,
        usageCriteria: 'Mobile security',
      },
      {
        name: 'securitySettings',
        Component: SecuritySettings,
        usageCriteria: 'Security settings',
      },
      {
        name: 'securityHouse',
        Component: SecurityHouse,
        usageCriteria: 'Secure house',
      },
    ]}
  />

  <IconTable
    heading="Mobility / Home Phone"
    icons={[
      {
        name: 'simCard',
        Component: SimCard,
        usageCriteria: 'SIM Card',
      },
      {
        name: 'callForward',
        Component: CallForward,
        usageCriteria: 'Unlimited call forward',
      },
      {
        name: 'callTalking',
        Component: CallTalking,
        usageCriteria: 'Phone in use',
      },
      {
        name: 'call',
        Component: Call,
        usageCriteria: 'Phone not in use',
      },
      {
        name: 'callReceive',
        Component: CallReceive,
        usageCriteria: 'Call receive',
      },
      {
        name: 'callOut',
        Component: CallOut,
        usageCriteria: 'Outwards call',
      },
      {
        name: 'messaging',
        Component: Messaging,
        usageCriteria: 'Messaging',
      },
      {
        name: 'videoChat',
        Component: VideoChat,
        usageCriteria: 'Video Chat',
      },
      {
        name: 'phoneReception',
        Component: PhoneReception,
        usageCriteria: 'Phone reception',
      },
      {
        name: 'signal',
        Component: Signal,
        usageCriteria: 'Signal',
      },
    ]}
  />

  <IconTable
    heading="Business"
    icons={[
      {
        name: 'uploadToCloud',
        Component: UploadToCloud,
        usageCriteria: 'Upload to cloud',
      },
      {
        name: 'cloudSync',
        Component: CloudSync,
        usageCriteria: 'Sync to cloud',
      },
      {
        name: 'computerNetwork',
        Component: ComputerNetwork,
        usageCriteria: 'Computer network',
      },
      {
        name: 'privateCloud',
        Component: PrivateCloud,
        usageCriteria: 'Cloud is private',
      },
      {
        name: 'wifiCloud',
        Component: WifiCloud,
        usageCriteria: 'Wifi-cloud',
      },
      {
        name: 'phoneBusiness',
        Component: PhoneBusiness,
        usageCriteria: 'Business connect, default business wireline',
      },
      {
        name: 'nextGenFirewall',
        Component: NextGenFirewall,
        usageCriteria: 'Used in conjunction with Next Generation firewall service',
      },
      {
        name: 'artificialIntelligence',
        Component: ArtificialIntelligence,
        usageCriteria: 'Artificial Intelligence',
      },
    ]}
  />

  <IconTable
    heading="Health"
    icons={[
      {
        name: 'baby',
        Component: Baby,
        usageCriteria: 'baby, children, male or female',
      },
      {
        name: 'babyBoy',
        Component: BabyBoy,
        usageCriteria: 'baby, children, male',
      },
      {
        name: 'babyGirl',
        Component: BabyGirl,
        usageCriteria: 'baby, children, female',
      },
      {
        name: 'medical',
        Component: Medical,
        usageCriteria: 'health, medical',
      },
    ]}
  />

  <IconTable
    heading="General"
    icons={[
      {
        name: 'home',
        Component: Home,
        usageCriteria: 'For the home produdcts/services or a service that can be done at home',
      },
      {
        name: 'locationRegular',
        Component: LocationRegular,
        usageCriteria: 'Used as an indication for location or address',
      },
      {
        name: 'locationAdd',
        Component: LocationAdd,
        usageCriteria: 'When an address is needed or if a user has the option to add a location',
      },
      {
        name: 'locationVerified',
        Component: LocationVerified,
        usageCriteria: 'When a validated address has been added',
      },
      {
        name: 'locationRemove',
        Component: LocationRemove,
        usageCriteria: 'When there is an option to remove location',
      },
      {
        name: 'locationHome',
        Component: LocationHome,
        usageCriteria: 'Used to indicate that the location is the home address',
      },
      {
        name: 'support',
        Component: Support,
        usageCriteria: 'Customer support, FAQs',
      },
      {
        name: 'warranty',
        Component: Warranty,
        usageCriteria: 'For when warranty or repair is available/required',
      },
      {
        name: 'calendar',
        Component: Calendar,
        usageCriteria:
          "For indicating a date, if something is time sensitive, or if a service requires scheduling{' '}",
      },
      {
        name: 'award',
        Component: Award,
        usageCriteria: '"Best in class" or have won an award',
      },
      {
        name: 'delivery',
        Component: Delivery,
        usageCriteria: 'Delivery is available or required – not to be confused with service truck',
      },
      {
        name: 'success',
        Component: Success,
        usageCriteria:
          "For validating that the information added has been processed and is successful, ready for        cart review in check out{' '}",
      },
      {
        name: 'piggyBank',
        Component: PiggyBank,
        usageCriteria: 'For saving, reduction, money credit back, online bill credit',
      },
      {
        name: 'settings',
        Component: Settings,
        usageCriteria: 'For settings, troubleshooting, technical support',
      },
      {
        name: 'speakerPhone',
        Component: SpeakerPhone,
        usageCriteria: 'Announcements',
      },
      {
        name: 'bell',
        Component: Bell,
        usageCriteria: 'Alarm, time sensitive, used as notifications (like Facebook)',
      },
      {
        name: 'bill',
        Component: Bill,
        usageCriteria: 'Paper bill and e-bill, summary of your bill',
      },
      {
        name: 'arrowUp',
        Component: ArrowUp,
        usageCriteria: 'Upwards direction, price increase',
      },
      {
        name: 'arrowDown',
        Component: ArrowDown,
        usageCriteria: 'Downwards direction, price descrease',
      },
      {
        name: 'creditCard',
        Component: CreditCard,
        usageCriteria: 'Credit card (not debit)',
      },
      {
        name: 'bank',
        Component: Bank,
        usageCriteria: 'Direct debit (not credit)',
      },
      {
        name: 'heart',
        Component: Heart,
        usageCriteria: 'Used to favourite items (will need toggle versions in future)',
      },
      {
        name: 'lightbulb',
        Component: Lightbulb,
        usageCriteria: 'Tips, smart lightbulbs',
      },
      {
        name: 'globe1',
        Component: Globe1,
        usageCriteria: "TELUS international, map and locations (America's specific)",
      },
      {
        name: 'globe2',
        Component: Globe2,
        usageCriteria: 'TELUS international, can be used to indicate network',
      },
      {
        name: 'lockClosed',
        Component: LockClosed,
        usageCriteria: 'Set and locked, cannot be altered or changed',
      },
      {
        name: 'lockOpened',
        Component: LockOpened,
        usageCriteria: 'Can be altered or changed',
      },
      {
        name: 'user',
        Component: User,
        usageCriteria:
          "Information of the user including but not limited to first and last name, address, email{' '}",
      },
      {
        name: 'chat1',
        Component: Chat1,
        usageCriteria: 'Contact support through chat/messages on TELUS.com',
      },
      {
        name: 'chat2',
        Component: Chat2,
        usageCriteria: 'Alternative to chat1, contact support through chat/messages on TELUS.com',
      },
      {
        name: 'cloudDownload',
        Component: CloudDownload,
        usageCriteria: 'Download through cloud',
      },
      {
        name: 'cloudUpload',
        Component: CloudUpload,
        usageCriteria: 'Upload through cloud',
      },
      {
        name: 'diagram',
        Component: Diagram,
        usageCriteria: 'Diagram, mapping',
      },
      {
        name: 'direction',
        Component: Direction,
        usageCriteria: 'direction, traffic',
      },
      {
        name: 'download',
        Component: Download,
        usageCriteria: 'download through cloud',
      },
      { name: 'upload', Component: Upload, usageCriteria: 'Upload' },
      {
        name: 'headFemale',
        Component: HeadFemale,
        usageCriteria: 'user, profile, female user',
      },
      {
        name: 'firewall',
        Component: Firewall,
        usageCriteria: 'firewall, verified security',
      },
      {
        name: 'idTag',
        Component: IdTag,
        usageCriteria: 'ID, verification of person',
      },
      {
        name: 'infinite',
        Component: Infinite,
        usageCriteria: 'infinite',
      },
      {
        name: 'headMale',
        Component: HeadMale,
        usageCriteria: 'user, profile, group',
      },
      {
        name: 'headBoth',
        Component: HeadBoth,
        usageCriteria: 'user, profile, male user',
      },
      {
        name: 'map',
        Component: typeof MapIcon === 'undefined' ? Map : MapIcon, // This is a workaround for reserved names that cannot be overridden in globalComponents.js
        usageCriteria: 'map, travel, gps',
      },
      {
        name: 'play',
        Component: Play,
        usageCriteria: 'play, video alternative',
      },
      {
        name: 'preference',
        Component: Preference,
        usageCriteria: 'preference, settings alternative',
      },
      {
        name: 'radar',
        Component: Radar,
        usageCriteria: 'Radar, travel (land and sea search)',
      },
      { name: 'receipt', Component: Receipt, usageCriteria: 'receipt, e-billing' },
      { name: 'server', Component: Server, usageCriteria: 'server' },
      { name: 'shop', Component: Shop, usageCriteria: 'shop, store' },
      {
        name: 'clipboard',
        Component: typeof ClipboardIcon === 'undefined' ? Clipboard : ClipboardIcon,
        usageCriteria: 'For information or forms',
      },
      {
        name: 'tasks',
        Component: Tasks,
        usageCriteria: 'tasks, checklist, alternative to clipboard',
      },
      {
        name: 'transmitter',
        Component: Transmitter,
        usageCriteria: 'electricity, transmitter tower',
      },
      {
        name: 'loginForm',
        Component: LoginForm,
        usageCriteria: 'Login form',
      },
      {
        name: 'chatSupport',
        Component: ChatSupport,
        usageCriteria: 'Can reach a person on the support team to help with any issues',
      },
      {
        name: 'backToSchool',
        Component: BackToSchool,
        usageCriteria: 'Back to school deals or promotions, recommended',
      },
      {
        name: 'gift',
        Component: Gift,
        usageCriteria: 'Gift promotion that comes with the product or service',
      },
      {
        name: 'users',
        Component: Users,
        usageCriteria: 'Available for more than one user',
      },
      {
        name: 'devices',
        Component: Devices,
        usageCriteria: 'compatible/for smart devices',
      },
      {
        name: 'lifesaver',
        Component: Lifesaver,
        usageCriteria: 'For crucial information or that you will get help in the section',
      },
      {
        name: 'thumbsUp',
        Component: ThumbsUp,
        usageCriteria: 'Indicates that something is liked or recommended',
      },
      {
        name: 'tablet',
        Component: Tablet,
        usageCriteria: 'Compatible/for tablets',
      },
      {
        name: 'laptop',
        Component: Laptop,
        usageCriteria: 'For laptops/computers/desktop',
      },
      {
        name: 'router',
        Component: Router,
        usageCriteria: 'Requires a router or a router is available',
      },
      {
        name: 'watch',
        Component: Watch,
        usageCriteria: 'Smart watches, fitness watches',
      },
      { name: 'phone', Component: Phone, usageCriteria: 'Phone' },
      {
        name: 'videoGames',
        Component: VideoGames,
        usageCriteria: 'For video games including virtual reality, connected games, etc',
      },
      {
        name: 'camera',
        Component: Camera,
        usageCriteria: 'Indicates that a photo is required or suggested; used in My TELUS profile',
      },
      {
        name: 'news',
        Component: News,
        usageCriteria:
          'Announcements or news related to events, press releases, changes that may or may not affect        the user',
      },
      {
        name: 'flag',
        Component: Flag,
        usageCriteria:
          '3rd option, not alert, not a favourite but want to mark (may need on and off toggle)',
      },
      {
        name: 'email',
        Component: Email,
        usageCriteria:
          'Indicates that an email can be sent to share information with yourself or others; an email        is required.',
      },
      {
        name: 'photo',
        Component: Photo,
        usageCriteria: 'Photo/image',
      },
      {
        name: 'chartsBar1',
        Component: ChartsBar1,
        usageCriteria: 'Reports, data usage, dashboards',
      },
      {
        name: 'chartsBar2',
        Component: ChartsBar2,
        usageCriteria: 'Reports, data usage, dashboards',
      },
      {
        name: 'chartsLine',
        Component: ChartsLine,
        usageCriteria: 'Reports, data usage, dashboards',
      },
      {
        name: 'collaboration',
        Component: Collaboration,
        usageCriteria: 'Collaboration, IoT',
      },
      {
        name: 'locationMap',
        Component: LocationMap,
        usageCriteria:
          'Another way to indicate location of something; can use location map or location icon. Cannot        be used ON a map',
      },
      {
        name: 'signPost',
        Component: SignPost,
        usageCriteria: 'Drive+, car related, GPS',
      },
      {
        name: 'compass',
        Component: Compass,
        usageCriteria: 'Indicates directions, Drive+, car related, GPS, travel',
      },
      { name: 'key', Component: Key, usageCriteria: 'Password, key' },
      {
        name: 'information',
        Component: Information,
        usageCriteria: 'Indicates extra information',
      },
      {
        name: 'attention',
        Component: Attention,
        usageCriteria: 'Used when alerting user of changes or simply to alert them',
      },
      {
        name: 'bookmark',
        Component: Bookmark,
        usageCriteria:
          'Used to bookmark a page or callout a product or service as being popular or recommended',
      },
      {
        name: 'serviceTruck',
        Component: ServiceTruck,
        usageCriteria: 'Set up is required or available to set the product/service up',
      },
      {
        name: 'time',
        Component: Time,
        usageCriteria: 'Time; for scheduling',
      },
      {
        name: 'fingerprint',
        Component: Fingerprint,
        usageCriteria: 'Unique/personalized service, security',
      },
      {
        name: 'music',
        Component: Music,
        usageCriteria: 'Music, Stingray music channels (Optik TV)',
      },
      {
        name: 'files',
        Component: Files,
        usageCriteria: 'More than one document',
      },
      {
        name: 'document',
        Component: typeof DocumentIcon === 'undefined' ? Document : DocumentIcon,
        usageCriteria: 'Single document',
      },
      {
        name: 'layers',
        Component: Layers,
        usageCriteria: 'Plans, channels, theme packs',
      },
      {
        name: 'target',
        Component: Target,
        usageCriteria: 'Target market, precision, focus, business targets',
      },
      {
        name: 'heart',
        Component: Heart,
        usageCriteria: 'Health related',
      },
      {
        name: 'usbCable',
        Component: UsbCable,
        usageCriteria: 'Device can be connected with a USB or requires a USB cable to work',
      },
      {
        name: 'headset',
        Component: Headset,
        usageCriteria: 'Headsets; requires or recommends headsets',
      },
      {
        name: 'speaker',
        Component: Speaker,
        usageCriteria: 'Speakers; can be interchanged with headset',
      },
      {
        name: 'refresh',
        Component: Refresh,
        usageCriteria: 'Page/section refresh',
      },
      {
        name: 'record',
        Component: Record,
        usageCriteria: 'Voicemail',
      },
      {
        name: 'visible',
        Component: Visible,
        usageCriteria: 'Visible informaton',
      },
      {
        name: 'invisible',
        Component: Invisible,
        usageCriteria: 'Invisible information',
      },
      {
        name: 'sharedAccount',
        Component: SharedAccount,
        usageCriteria: 'Account is shared',
      },
      {
        name: 'addUser',
        Component: AddUser,
        usageCriteria: 'User can be added',
      },
      {
        name: 'batteryCharging',
        Component: BatteryCharging,
        usageCriteria: 'Battery charging',
      },
      {
        name: 'contract',
        Component: Contract,
        usageCriteria: 'Contract',
      },
      {
        name: 'briefcase',
        Component: Briefcase,
        usageCriteria: 'Business',
      },
      {
        name: 'alarmClock',
        Component: AlarmClock,
        usageCriteria: 'Time sensitive',
      },
      {
        name: 'suitcase',
        Component: Suitcase,
        usageCriteria: 'Travel',
      },
      {
        name: 'cronometer',
        Component: Cronometer,
        usageCriteria: 'Used when comparing speeds',
      },
      {
        name: 'photos',
        Component: Photos,
        usageCriteria: 'Images, photos, albums',
      },
      {
        name: 'office',
        Component: Office,
        usageCriteria: 'office, address',
      },
      {
        name: 'passport',
        Component: Passport,
        usageCriteria: 'travel, document verification',
      },
      {
        name: 'networking',
        Component: Networking,
        usageCriteria: 'Networking',
      },
      {
        name: 'accessible',
        Component: Accessible,
        usageCriteria: 'Accessible',
      },
    ]}
  />
</Box>
```
