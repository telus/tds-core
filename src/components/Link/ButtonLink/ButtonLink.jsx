import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

import safeRest from '../../../safeRest';
import { getClassName, preventDisabling } from '../../Button/Button';

import styles from '../../Button/Button.modules.scss';

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const ButtonLink = ({ variant, invert, children, ...rest }) => {
  const restNoDisabled = preventDisabling(rest);

  return React.createElement(
    rest.to ? ReactRouterLink : 'a',
    {
      ...safeRest(restNoDisabled),
      className: getClassName(variant, invert)
    },
    children
  );
};
ButtonLink.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outlined'
  ]),
  invert: PropTypes.bool,
  children: PropTypes.string.isRequired
};
ButtonLink.defaultProps = {
  variant: 'primary',
  invert: false
};
ButtonLink.displayName = 'Link.Button';

export default ButtonLink;
