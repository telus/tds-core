import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./RibbonText.scss');
}

const RibbonText = ({ children }) => (
  <div className="ribbon-text__container">
    <span className="text text--small ribbon-text__content">{children}</span>
  </div>
);

RibbonText.propTypes = {
  children: PropTypes.node.isRequired
};

export default RibbonText;
