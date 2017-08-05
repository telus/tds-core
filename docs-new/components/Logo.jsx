import React from 'react';
import PropTypes from 'prop-types';
import logo from './Logo.svg';

export function LogoRenderer() {
  return (
    <a href="#telus-design-system" title="TELUS Design System Homepage" className="logo">
      <img src={logo} alt="TELUS Logo"/>
    </a>
  );
}

export default LogoRenderer;
