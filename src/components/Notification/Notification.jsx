import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { deprecate } from '../../warn';

import './Notification.scss';

const ErrorIcon = () => (
  <i className="icon icon-core-exclamation-point-circle c-notification__icon" />
);

/**
 * A banner to highlight important notices.
 */
const Notification = ({ className, variant, children, ...rest }) => {
  if (className) {
    deprecate('Notification', 'Custom CSS classes are deprecated. This component does not support custom styling.');
  }

  if (rest.style) {
    deprecate('Notification', 'Inline styles are deprecated. This component does not support custom styling.');
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
  /**
   * One or more CSS class names separated by spaces to append onto the Notification.
   * @deprecated since v0.18.0. Notification will no longer support custom styling.
   */
  className: PropTypes.string,
  /**
   * The appearance of the Notification.
   */
  variant: PropTypes.oneOf([
    'instructional',
    'branded',
    'success',
    'error'
  ]),
  /**
   * The Notification's content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired
};

export default Notification;
