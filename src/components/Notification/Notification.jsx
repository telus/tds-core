import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { warn } from '../../deprecate';

import './Notification.scss';

const ErrorIcon = () => (
  <i className="icon icon-core-exclamation-point-circle c-notification__icon" />
);

/**
  * A banner to highlight important notices.
  */
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
  /**
    * (DEPRECATED) Additional css classes
    */
  className: PropTypes.string,
  /**
    * Adds a background color variation to the component
    */
  variant: PropTypes.oneOf([
    'instructional',
    'branded',
    'success',
    'error'
  ]),
  /**
   * Content to be displayed within the Notification banner. Can be text, any HTML element,
   * or any component.
   */
  children: PropTypes.node.isRequired
};

export default Notification;
