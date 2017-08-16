import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

import safeRest from '../../../safeRest';
import Icon from '../../Icon/Icon';

import styles from './ChevronLink.modules.scss';

const getClassName = (variant) => {
  switch (variant) {
    case 'secondary':
      return styles.secondary;
    case 'inverted':
      return styles.inverted;
    default:
      return styles.primary;
  }
};

const getIcon = (glyph, className) => (
  <span className={className}>
    <Icon glyph={glyph} aria-hidden="true" />
  </span>
);

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const ChevronLink = ({ variant, direction, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant)
    },
    direction === 'left' ? getIcon('left-chevron', styles.leftChevron) : undefined,
    children,
    direction === 'right' ? getIcon('chevron', styles.rightChevron) : undefined
  )
);
ChevronLink.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted'
  ]),
  direction: PropTypes.oneOf([
    'left',
    'right'
  ]),
  children: PropTypes.node.isRequired
};
ChevronLink.defaultProps = {
  variant: 'primary',
  direction: 'right'
};
ChevronLink.displayName = 'Link.Chevron';

export default ChevronLink;
