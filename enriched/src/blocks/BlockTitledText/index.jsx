import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { components } from '@telusdigital/redux-contentful';

import ComponentTitledText from '../ComponentTitledText';

if (process.env.BROWSER) {
  require('./b-titled-text.scss');
}

const { Legal: { WithLegal } } = components;

/**
 * BlockTitledText is composed of a section title and an array of
 * [ComponentTitledText](#componenttitledtext).
 * It takes up 9 columns on screens above a large breakpoint, and below that, full width.
 *
 * Contentful models (BUS > Marketing): Titled Text Block
 */
const BlockTitledText = (props) => {
  const { title, content, titleHeadingClass, id } = props;

  const contentHtml = content.map((componentProps, index) => (
    <ComponentTitledText
      key={index}
      title={componentProps.title}
      text={componentProps.content}
    />
  ));

  return (
    <section className="b-titled-text" id={id}>
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="large-9">
            <h1 className={titleHeadingClass}><WithLegal content={title} /></h1>
            {contentHtml}
          </div>
        </div>
      </div>
    </section>
  );
};

BlockTitledText.propTypes = {
  /** recommended: text should fit in one line */
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })),
  /** optional CSS class to customize title heading */
  titleHeadingClass: PropTypes.string,
  id: PropTypes.string
};

BlockTitledText.defaultProps = {
  titleHeadingClass: 'heading-1',
  content: []
};

export default BlockTitledText;
