import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { warn } from '../../deprecate';

if (process.env.BROWSER) {
  require('./Card.scss');
}

const Card = ({ className, children, ...rest }) => {
  if (className) {
    warn('Card', 'Custom CSS classes are deprecated. This component does not support custom styling.');
  }

  if (rest.style) {
    warn('Card', 'Inline styles are deprecated. This component does not support custom styling.');
  }

  return (
    <div {...rest} className={classNames('card', className)}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
