import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { warn } from '../../deprecate';

import './Card.scss';

/**
 * A card is a container that serves as an entry point to more detailed information.
 * A card's width will match its parent.
 */
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
  /**
   * Pass a custom class.
   */
  className: PropTypes.string,
  /**
   * Child elements.
   */
  children: PropTypes.node.isRequired
};

export default Card;
