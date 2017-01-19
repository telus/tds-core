import React from 'react';
import cx from 'classnames';

if ( process.env.BROWSER ) {
  require('./Card.scss');
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
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
