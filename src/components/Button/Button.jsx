import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.modules.scss';

const getClassName = (variant, invert, outline) => {
  if (invert && outline) {
    return styles[`${variant}InvertedOutlined`];
  }

  if (invert) {
    return styles[`${variant}Inverted`];
  }

  if (outline) {
    return styles[`${variant}Outlined`];
  }

  return styles[variant];
};

/**
 * <span class="docs--badge green">coming soon!</span>
 */
const Button = ({ type, variant, invert, outline, children, ...rest }) => (
  <button {...rest} type={type} className={getClassName(variant, invert, outline)}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  invert: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.string.isRequired
};
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  invert: false,
  outline: false
};

export default Button;
