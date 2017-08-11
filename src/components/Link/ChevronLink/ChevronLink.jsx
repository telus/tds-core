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

const ChevronLink = ({ variant, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(variant)
    },
    children,
    <span className={styles.chevron}>
      <Icon glyph="chevron" aria-hidden="true" />
    </span>
  )
);
ChevronLink.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'inverted'
  ]),
  children: PropTypes.node.isRequired
};
ChevronLink.defaultProps = {
  variant: 'primary'
};
ChevronLink.displayName = 'Link.Chevron';

export default ChevronLink;
