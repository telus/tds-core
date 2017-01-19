---
title: Notification
template: doc.jade
---

## Overview

---

A reusable notification banner that spans the width of the page and displays arbitrary children.
The different colour variations are

- `notification--instructional` :
- `notification--branded` :
- `notification--success` :
- `notification--error` :

```js
import React, { PropTypes } from 'react';

function Notification(props) {
  const { className, ...extraProps } = props;
  const classes = ['notification', className];

  return (
    <div className={ classes.filter(c => c).join(' ') } { ...extraProps }>
      { props.children }
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
};

export default Notification;

```

<div id="notificationExample"></div>

<script type="text/babel">
  ReactDOM.render(
    <Thorium.Notification>
      <h3>Default Notification</h3>
    </Thorium.Notification>,
    document.getElementById('notificationExample')
  );
</script>