import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

import safeRest from '../../../safeRest';
import Icon from '../../Icon/Icon';

import styles from './ChevronLink.modules.scss';

const ChevronLink = ({ children, ...rest }) => (
  React.createElement(
    rest.to ? ReactRouterLink : 'a',
    { ...safeRest(rest), className: styles.link },
    children,
    <span className={styles.chevron}>
      <Icon glyph="chevron" aria-hidden="true" />
    </span>
  )
);
ChevronLink.propTypes = {
  children: PropTypes.node.isRequired
};
ChevronLink.displayName = 'Link.Chevron';

export default ChevronLink;
