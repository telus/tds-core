### General Notes

Icons that provide feedback based on a user’s action. They are accessible and are read out by assistive technology.

### Accessibility

When consuming `FeedbackIcon`, be sure to utilize accessible text where appropriate in order to inform customers of any major changes that should draw their attention.

#### Required Accessibile Text

To use the default accessible text, pass either `en` or `fr` to the `copy` property. To use custom accessibile text, pass an object with an `a11yText` property to the `copy` property of the icon.

```jsx
<NotificationSuccess copy={{ a11yText: 'Success, you have added custom accessibile text' }} />
```

#### Optional Accessibile Text

Some FeedbackIcons do not require accessible text but can accept text optionally. To add optional accessibile text to an icon. Pass an `a11yText` property to the icon.

```jsx
<Checkmark a11yText="This is optional accessible text" />
```

Check out the table below a full list of Feedback Icons and their usage guidelines.

```jsx noeditor
const IconTable = require('../../docs/components/custom/IconTable/IconTable').default
;<Box between={4}>
  <IconTable
    heading="Feedback Icons"
    noSort
    icons={[
      {
        name: 'Checkmark',
        Component: Checkmark,
        usageCriteria:
          'Used in unordered list to indicate success/approval, used in benefit list (business specific)',
        accessibleText: 'Optional',
      },
      {
        name: 'Times',
        Component: Times,
        usageCriteria:
          'Red is exclusively used in unordered list to indicate requirements have not been met or something is not included, not used for close or remove, shuttle grey only used as close with hamburger menu',
        accessibleText: 'Optional',
      },
      {
        name: 'NotificationSuccess',
        Component: NotificationSuccess,
        usageCriteria: `Only used in notifications/feedback as success.`,
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
      {
        name: 'NotificationError',
        Component: NotificationError,
        usageCriteria: 'Only used in notifications/feedback as error.',
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
      {
        name: 'NotificationWarning',
        Component: NotificationWarning,
        usageCriteria: 'Only used in notifications/feedback as warning.',
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
      {
        name: 'LocationSuccess',
        Component: LocationSuccess,
        usageCriteria: `Used to show that address is successful, service is available based on location.`,
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
      {
        name: 'LocationIneligible',
        Component: LocationIneligible,
        usageCriteria:
          'Used to show that an address is ineligible, service is unavailable based on location.',
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
      {
        name: 'LocationAdd',
        Component: LocationAdd,
        usageCriteria: 'Used to add locations/address.',
        props: {
          copy: 'en',
        },
        accessibleText: 'Required',
      },
    ]}
  />
</Box>
```
