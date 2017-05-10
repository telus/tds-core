import React from 'react';
import { components } from '@telusdigital/redux-contentful';

if ( process.env.BROWSER ) {
  require('./b-titled-text.scss');
}

const { Legal: { WithLegal } } = components;


const BlockTitledText = (props) => {
  const { title, content, titleHeadingClass } = props;

  const contentHtml = content.map((c, index) => (
    <div key={index} className="b-titled-text__content">
      <h2 className="heading-4"><WithLegal content={c.title} /></h2>
      <p><WithLegal content={c.content} /></p>
    </div>
  ));

  return (
    <section className="b-titled-text">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="small-9 medium-9 large-9">
            <h1 className={titleHeadingClass}><WithLegal content={title} /></h1>
            {contentHtml}
          </div>
        </div>
      </div>
    </section>
  );
};

BlockTitledText.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
  })),
  titleHeadingClass: React.PropTypes.string
};

BlockTitledText.defaultProps = {
  titleHeadingClass: 'heading-1',
  content: []
};

export default BlockTitledText;
