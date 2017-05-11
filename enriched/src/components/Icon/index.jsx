import React, { PropTypes } from 'react';

function Icon(props) {
  const { glyph, variant, fixedWidth, className, ...extraProps } = props;

  const classes = [
    'icon',
    `icon-core-${glyph}`,
    fixedWidth ? 'icon--fw' : null,
    variant ? `icon--${variant}` : null,
    className ? className : null
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
  fixedWith: PropTypes.bool,
  className: PropTypes.string
};

export default Icon;
