import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const { glyph, variant, fixedWidth, className, children, ...extraProps } = props;

  const classes = [
    'icon',
    `icon-core-${glyph}`,
    fixedWidth ? 'icon--fw' : null,
    variant ? `icon--${variant}` : null,
    className
  ];

  return (
    <i className={classes.filter(c => c).join(' ')} {...extraProps}>
      {props.children}
    </i>
  );
}

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fixedWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Icon;
