import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Container(props) {
  const { className, limitWidth, ...extraProps } = props;
  const classes = cx('container', className, {
    'container--limited-width': limitWidth === true
  });

  return (
    <div className={classes} {...extraProps}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  limitWidth: PropTypes.bool,
  children: PropTypes.node
};

export default Container;
