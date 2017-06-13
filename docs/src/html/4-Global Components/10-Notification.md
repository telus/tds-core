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

## API

| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| variant | Adds color variation to the background of the component | string |  none |



### Examples

---
The component comes in the following colour variations:
- Default
- Branded
- Success
- Error
- instructional


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
          <Tds.Notification>
            <p>Default - no additional classes</p>
          </Tds.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Branded</h4>
          <Tds.Notification variant="branded">
            <p>.notification--branded</p>
          </Tds.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Success</h4>
          <Tds.Notification variant="success">
            <p>.notification--success</p>
          </Tds.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Error (.notification--error)</h4>
          <Tds.Notification variant="error">
            <p>Looks like our registration system is temporarily down. You'll need to come back another time to register for My Account. </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </Tds.Notification>
        </li>
        <li style={margins}>
          <h4>Notification Instructional - same as default styling</h4>
          <Tds.Notification variant="instructional">
            <p>.notification--instructional</p>
          </Tds.Notification>
        </li>
      </ul>
    );
  }

  ReactDOM.render(
    exampleNotifications(),
    document.getElementById('notificationExample')
  );
</script>
