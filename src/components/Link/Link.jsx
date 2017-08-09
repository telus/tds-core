import React from 'react';
import PropTypes from 'prop-types';

import { Link as ReactRouterLink } from 'react-router-dom';

/**
 * Inline text links
 */
const Link = ({ to, href, children }) => {
  if (to) {
    return (
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
    );
  }

  return (
    <a href={href}>{children}</a>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Link;
