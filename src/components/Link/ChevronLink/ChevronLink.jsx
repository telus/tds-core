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

const getIcon = (direction) => {
  if (direction === 'left') {
    return (<span className={styles.chevron}>
      <Icon glyph="chevron" aria-hidden="true" />
    </span>)
  }

  return (<span className={styles.chevron}>
    <Icon glyph="chevron" aria-hidden="true" />
  </span>)
};

const ChevronLink = ({ variant, direction, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant)
    },
    direction === 'left' ? getIcon(direction) : undefined,
    children,
    direction === 'right' ? getIcon(direction) : undefined
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
