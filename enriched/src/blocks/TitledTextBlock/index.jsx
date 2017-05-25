import React, { Component } from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./titledTextBlock.scss');
}

class TitledTextBlock extends Component {

  render() {
    const { title, content, titleHeadingClass } = this.props;

    const contentHtml = content.map((c, index) => (
      <div key={index} className="title-text-block__content">
        <h2 className="heading-4">{c.title}</h2>
        <p>{c.content}</p>
      </div>
    ));

    return (
      <section className="titled-text-block">
        <div className="tds-container tds-container--limited-width">
          <div className="tds-grid-row">
            <div className="tds-small-12 tds-medium-12 tds-large-12">
              <h1 className={titleHeadingClass}>{title}</h1>
              {contentHtml}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TitledTextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired,
  titleHeadingClass: PropTypes.string
};

TitledTextBlock.defaultProps = {
  titleHeadingClass: 'heading-1'
};

export default TitledTextBlock;
