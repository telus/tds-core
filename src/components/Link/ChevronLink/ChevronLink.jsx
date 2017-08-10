import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

import safeRest from '../../../safeRest';

const ChevronLink = ({ children, ...rest }) => (
  React.createElement(rest.to ? ReactRouterLink : 'a', { ...safeRest(rest) }, children)
);
ChevronLink.propTypes = {
  children: PropTypes.node.isRequired
};
ChevronLink.displayName = 'Link.Chevron';

export default ChevronLink;
