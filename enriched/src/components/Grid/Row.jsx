import React from 'react';
import PropTypes from 'prop-types';

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
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Row;
