import React, { Component } from 'react';

if ( process.env.BROWSER ) {
  require('./titledTextBlock.scss');
}

class TitledTextBlock extends Component {

  render() {
    const { title, content, titleTagType } = this.props;

    const contentHtml = content.map((c, index) => (
      <div key={index} className="titled-text-component">
        <h4>{c.title}</h4>
        <p>{c.content}</p>
      </div>
    ));

    return (
      <div className="titled-text-block">
        <div className="container container--limited-width">
          <div className="grid-row">
            <div className="small-12 medium-12 large-12">
              {React.createElement(titleTagType, null, title)}
              {contentHtml}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TitledTextBlock.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
  })).isRequired,
  titleTagType: React.PropTypes.string
};

TitledTextBlock.defaultProps = {
  titleTagType: 'h1'
};

export default TitledTextBlock;
