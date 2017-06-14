import React from 'react';
import PropTypes from 'prop-types';

function Notification(props) {
  const { className, variant, children, ...extraProps } = props;
  const classes = ['notification', className];

  let iconHtml = '';

  if (process.env.BROWSER) {
    require('./Notification.scss');
  }

  if (variant) {
    classes.push(`notification--${variant}`);
  }

  if (variant === 'error') {
    iconHtml = (<i
      className="icon icon-core-exclamation-point-circle c-notification__icon" />);
  }

  return (
    <div className={classes.filter(c => c).join(' ')} {...extraProps}>
      <div className="notification__content">
        {iconHtml}
        <div className="c-notification__text">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Notification.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node
};

export default Notification;
