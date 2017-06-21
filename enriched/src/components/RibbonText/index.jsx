import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./RibbonText.scss');
}

const RibbonText = ({ content }) => (
  <div className="ribbon-text__container">
    <span className="text text--small ribbon-text__content">{content}</span>
  </div>
);

RibbonText.propTypes = {
  content: PropTypes.string.isRequired
};

export default RibbonText;
