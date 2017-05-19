import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

if (process.env.BROWSER) {
  require('./card.scss');
}

const Card = (props) => {
  const { children, className, ...restProps } = props;
  const cls = cx('card', className);

  return (
    <div className={cls} {...restProps}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
