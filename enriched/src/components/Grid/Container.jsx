import React, { PropTypes } from 'react';

function Container(props) {
  const { className, ...extraProps } = props;
  const classes = ['container', className];

  return (
    <div className={ classes.filter(c => c).join(' ') } { ...extraProps }>
      { props.children }
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
