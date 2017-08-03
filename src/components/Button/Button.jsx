import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.modules.scss';

const getClassName = (variant, invert) => {
  if (invert) {
    return styles[`${variant}Inverted`];
  }

  return styles[variant];
};

/**
 * <span class="docs--badge green">coming soon!</span>
 */
const Button = ({ type, variant, invert, children, ...rest }) => (
  <button {...rest} type={type} className={getClassName(variant, invert)}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  invert: PropTypes.bool,
  children: PropTypes.string.isRequired
};
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  invert: false
};

export default Button;
