import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { warn } from '../../deprecate';

if (process.env.BROWSER) {
  require('./Notification.scss');
}

const ErrorIcon = () => (
  <i className="icon icon-core-exclamation-point-circle c-notification__icon" />
);

const Notification = ({ className, variant, children, ...rest }) => {
  if (className) {
    warn('Notification', 'Custom CSS classes are deprecated. This component does not support custom styling.');
  }

  if (rest.style) {
    warn('Notification', 'Inline styles are deprecated. This component does not support custom styling.');
  }

  const classes = classNames('notification', className, {
    [`notification--${variant}`]: variant
  });

  return (
    <header role="banner" {...rest} className={classes}>
      <div className="notification__content">
        {variant === 'error' && <ErrorIcon />}

        <div className="c-notification__text">
          {children}
        </div>
      </div>
    </header>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'instructional',
    'branded',
    'success',
    'error'
  ]),
  children: PropTypes.node.isRequired
};

export default Notification;
