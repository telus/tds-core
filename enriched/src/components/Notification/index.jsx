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