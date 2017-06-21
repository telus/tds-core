import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import { components } from '@telusdigital/redux-contentful';

if (process.env.BROWSER) {
  require('./c-titled-text.scss');
}

const { Legal: { WithLegal } } = components;

/**
 * ComponentTitledText can be used with [BlockTitledText](/#blocktitledtext).
 * It takes up the full width of its parent container.
 *
 * Contentful models (BUS > Marketing): Titled Text Component
 */
const ComponentTitledText = (props) => {
  const { title, text, className } = props;
  const cls = cx(className);

  return (
    <div className={`${cls} c-titled-text`}>
      <h3 className="heading-4"><WithLegal content={title} /></h3>
      <p className="text--medium"><WithLegal content={text} /></p>
    </div>
  );
};

ComponentTitledText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

ComponentTitledText.defaultProps = {};

export default ComponentTitledText;
