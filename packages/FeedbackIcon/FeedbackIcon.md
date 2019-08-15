### General Notes

Icons that provide feedback based on a user’s action. They are accessible and are read out by assistive technology.

### Accessibility

When consuming `FeedbackIcon`, be sure to utilize accessible text where appropriate in order to inform customers of any major changes that should draw their attention.

#### Required Accessible Text

To use the default accessible text, pass either `'en'` or `'fr'` to the `copy` property. To use custom accessible text, pass an object with an `a11yText` property to the `copy` property of the icon.

Inspect the icons below using developer tools to see `<title />` being applied to the SVGs' output.

```jsx
<NotificationSuccess copy={{ a11yText: 'Success, you have added custom accessibile text' }} />
<NotificationWarning copy="fr" />
```

#### Optional Accessible Text

At this time, only the `Checkbox` and `Times` Feedback Icons can use the `copy` prop optionally.

```jsx
<Checkmark />
<Times />
```

Check out the table below for a complete list of Feedback Icons and their usage criteria.

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
        usageCriteria: 'Used exclusively in the Unordered List.',
        accessibleText: 'Optional',
      },
      {
        name: 'Times',
        Component: Times,
        usageCriteria: 'Used exclusively in the Unordered List.',
        accessibleText: 'Optional',
      },
      {
        name: 'NotificationSuccess',
        Component: NotificationSuccess,
        usageCriteria: 'Only used in notifications/feedback as success.',
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
        usageCriteria:
          'Used to show that address is successful, service is available based on location.',
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
