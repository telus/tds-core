import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

import ChevronLink from './ChevronLink/ChevronLink';
import safeRest from '../../safeRest';

import styles from './Link.modules.scss';

const getClassName = invert => (invert ? styles.inverted : styles.base);

const Link = ({ invert, children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(rest),
      className: getClassName(invert)
    },
    children
  )
);
Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  invert: PropTypes.bool,
  children: PropTypes.node.isRequired
};
Link.defaultProps = {
  to: null,
  href: null,
  invert: false
};

Link.Chevron = ChevronLink;

export default Link;
