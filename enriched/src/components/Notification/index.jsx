import React, { PropTypes } from 'react';

function Notification(props) {
  const { className, variant, ...extraProps } = props;
  const classes = ['notification', className];

  if( variant ){
    classes.push(`notification--${variant}`);
  }

  return (
    <div className={ classes.filter(c => c).join(' ') } { ...extraProps }>
      <div className="notification__content">
        { props.children }
      </div>
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Notification;