### General Notes

Feedback Icons are not interactive visually, but are accessible and are read out by screen readers. They are reactionary based on a user’s action.

### Accessibility

When consuming `FeedbackIcon`, be sure to utilize accessible text where appropriate in order to inform customers of any major changes that should draw their attention.

Check out the table below a full list of Feedback Icons and their usage guidelines.

```jsx
<Checkmark />
```

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
          'Used in unordered list to indicate success/approval, used in benefit list (business specific) TODO: Add note on when to use accessible text. TODO: Add note on when to use accessible text',
      },
      {
        name: 'Times',
        Component: Times,
        usageCriteria:
          'Red is exclusively used in unordered list to indicate requirements have not been met or something is not included, not used for close or remove, shuttle grey only used as close with hamburger menu',
      },
      {
        name: 'NotificationSuccess',
        Component: NotificationSuccess,
        usageCriteria: 'Only used in notifications/feedback as success',
        props: {
          copy: 'en',
        },
      },
      {
        name: 'NotificationError',
        Component: NotificationError,
        usageCriteria: 'Only used in notifications/feedback as error',
        props: {
          copy: 'en',
        },
      },
      {
        name: 'NotificationWarning',
        Component: NotificationWarning,
        usageCriteria: 'Only used in notifications/feedback as warning',
        props: {
          copy: 'en',
        },
      },
      {
        name: 'LocationSuccess',
        Component: LocationSuccess,
        usageCriteria:
          'Used to show that address is successful, service is available based on location',
        props: {
          copy: 'en',
        },
      },
      {
        name: 'LocationIneligible',
        Component: LocationIneligible,
        usageCriteria:
          'Used to show that an address is ineligible, service is unavailable based on location',
        props: {
          copy: 'en',
        },
      },
      {
        name: 'LocationAdd',
        Component: LocationAdd,
        usageCriteria: 'Used to add locations/address',
        props: {
          copy: 'en',
        },
      },
    ]}
  />
</Box>
```
