import React, { PropTypes } from 'react';

function Notification(props) {
  const { className, ...extraProps } = props;
  const classes = ['notification', className];

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
};

export default Notification;