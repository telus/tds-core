import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { warn } from '../../deprecate';

import './Card.scss';

/**
 * A container that serves as an entry point to more detailed information.
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
   * One or more CSS class names separated by spaces to append onto the container.
   * @deprecated since v0.18.0. Card will no longer support custom styling.
   */
  className: PropTypes.string,
  /**
   * The Card's content. Can be text, any HTML element, or any component.
   */
  children: PropTypes.node.isRequired
};

export default Card;
