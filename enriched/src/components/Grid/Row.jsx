import React, { PropTypes } from 'react';

function Row(props) {
  const { className, ...extraProps } = props;
  const classes = ['grid-row', className];

  return (
    <div className={classes.filter(c => c).join(' ')} {...extraProps}>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string
};

export default Row;
