---
title: Notification
template: doc.jade
---

## Overview

---

A reusable notification banner that spans the width of the page and displays arbitrary children.
Any stlying that may need to be applied to the content of the of the notification will need to be applied at the child level.

```js
import React, { PropTypes } from 'react';
import { Notification } from 'telus-thorium-enriched';

function NotificationExample(props) {

  return (
    <Notification>
      <h4>Notification content goes here.</h4>
    </Notification>
  );
};

export default NotificationExample;

```

## Variations

---
The component comes in the following colour variations:

<div id="notificationExample"></div>

<script type="text/babel">

  const exampleNotifications = () => {

    const margins = {
      marginTop: "20px",
      marginBottom: "20px",
    };

    return (
      <ul>
        <li style={margins}>
          <h4>Default</h4>
          <Thorium.Notification>
            <h4>Default - no additional classes</h4>
          </Thorium.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Branded</h4>
          <Thorium.Notification className="notification--branded">
            <h4>.notification--branded</h4>
          </Thorium.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Success</h4>
          <Thorium.Notification className="notification--success">
            <h4>.notification--success</h4>
          </Thorium.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Error</h4>
          <Thorium.Notification className="notification--error">
            <h4>.notification--error</h4>
          </Thorium.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Instructional - same as default styling</h4>
          <Thorium.Notification className="notification--instructional">
            <h4>.notification--instructional</h4>
          </Thorium.Notification>
        </li>
      </ul>
    );
  }

  ReactDOM.render(
    exampleNotifications(),
    document.getElementById('notificationExample')
  );
</script>