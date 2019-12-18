### Usage criteria

- Use only for top-level navigation (i.e. Global Elements, My TELUS, and applications like Casa)
- Must have 8px spacing (Box level 2) between each interactive icon
- If you don’t know whether you can use this or not, you probably can’t 😬
- You must provide a `numItems` prop when using `CartFilledBold`
- Limit use of NavButton (inverted) on TELUS Purple and Shark Grey backgrounds

### Accessibility

#### Accessibility features

- Features a built-in tooltip to provide additional context beyond visual recognition of the icon
- Displays the tooltip on hover and focus states
- Keyboard and cursor users to gain visual and written context
- Uses `aria-labelledby` attribute to connect the focused icon and its respective tooltip for assistive technology users

#### Accessibility Guideline

When consuming `NavButton`, be sure to provide a `copy` prop with each icon. We **highly** recommend passing `en` or `fr` to the `copy` prop, this will use the default copy TDS provides. If you **must** provide your own copy, you can pass an object with an `a11yText` key to the `copy` prop.

#### `CartFilledBold`

When using `CartFilledBold` you must also supply a `numItems` prop and use the `%{numItems}` token in your `a11yText`. See the examples below for custom copy.

```jsx
<CartEmptyBold copy={{ a11yText: 'Empty cart' }} />
<CartFilledBold copy={{ a11yText: 'Cart, %{numItems} items' }} numItems={2} />
```

### Usage

#### Default `NavButton`

```jsx
<Box inline between={2}>
  <CartEmptyBold copy="en" />
  <CartFilledBold copy="en" numItems={2} />
  <NotifyBold copy="en" />
  <ProfileBold copy="en" />
  <SearchBold copy="en" />
  <SettingsBold copy="en" />
  <SupportBold copy="en" />
  <UserAddBold copy="en" />
</Box>
```

#### Inverted `NavButton`

The NavButton (inverted) is optimized to be accessible as it achieves acceptable colour contrast when used on TELUS Purple and Shark Grey backgrounds.

```jsx
<Box style={{ background: '#4b286d' }} inline vertical={2} between={2}>
  <CartEmptyBold variant="inverted" copy="en" />
  <CartFilledBold variant="inverted" copy="en" numItems={1} />
  <NotifyBold variant="inverted" copy="en" />
  <ProfileBold variant="inverted" copy="en" />
  <SearchBold variant="inverted" copy="en" />
  <SettingsBold variant="inverted" copy="en" />
  <SupportBold variant="inverted" copy="en" />
  <UserAddBold variant="inverted" copy="en" />
</Box>
```

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<IconTable
  heading="Icons"
  icons={[
    {
      name: 'CartEmptyBold',
      Component: CartEmptyBold,
      usageCriteria: 'Indicate an empty cart',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'CartFilledBold',
      Component: CartFilledBold,
      usageCriteria: 'Indicate a filled cart',
      props: {
        copy: 'en',
        numItems: 2,
      },
    },
    {
      name: 'NotifyBold',
      Component: NotifyBold,
      usageCriteria: 'Direct to notification center',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'ProfileBold',
      Component: ProfileBold,
      usageCriteria: 'Direct to user profile',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'SearchBold',
      Component: SearchBold,
      usageCriteria: 'Indicate search functions within main-nav search',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'SettingsBold',
      Component: SettingsBold,
      usageCriteria: 'Direct to, or indicate available settings',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'SupportBold',
      Component: SupportBold,
      usageCriteria: 'Direct to a support page',
      props: {
        copy: 'en',
      },
    },
    {
      name: 'UserAddBold',
      Component: UserAddBold,
      usageCriteria: 'Add subscriber',
      props: {
        copy: 'en',
      },
    },
  ]}
/>
```
