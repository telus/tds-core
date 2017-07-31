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
      {children}
    </i>
  );
}

Icon.propTypes = {
  /**
   * Name of the icon glyph.
   */
  glyph: PropTypes.oneOf([
    'caret-down',
    'caret-up',
    'checkmark',
    'chevron',
    'exclamation-point-circle',
    'expander',
    'hamburger',
    'incomplete',
    'location',
    'minus',
    'plus',
    'question-mark-circle',
    'spyglass',
    'times'
  ]).isRequired,
  /**
   * The appearance of the Icon.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'disabled',
    'error'
  ]),
  /**
   * Whether or not to give the icon a fixed width.
   */
  fixedWidth: PropTypes.bool,
  /**
   * One or more CSS class names separated by spaces to append onto the icon.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * This can be used to add screen-reader content into the icon, but it must
   * be hidden from view. This behaviour is better accomplished with aria-* attributes.
   *
   * @ignore
   */
  children: PropTypes.node
};

export default Icon;
