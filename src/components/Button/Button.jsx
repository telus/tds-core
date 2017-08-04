import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.modules.scss';

const getClassName = (variant, invert) => {
  if (invert) {
    return styles[`${variant}Inverted`];
  }

  return styles[variant];
};

const safeRest = ({ style, className, ...props }) => props;

/**
 *
 * <span class="docs--badge green">coming soon!</span>
 */
const Button = ({ type, variant, invert, children, ...rest }) => (
  <button {...safeRest(rest)} type={type} className={getClassName(variant, invert)}>
    {children}
  </button>
);

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  /**
   * Whether or not to invert the variant's color scheme.
   */
  invert: PropTypes.bool,
  /**
   * The label.
   */
  children: PropTypes.string.isRequired
};
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  invert: false
};

export default Button;
