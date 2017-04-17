import React from 'react';
import './headline.scss';

const HeadlineBlock = (props) => {
  const { subcategory, title } = props;

  return (
    <div className="headline">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-6 large-7 xl-7">
            <p className="heading-4 grape">{subcategory}</p>
            <h1 className="display-heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

HeadlineBlock.propTypes = {
  title: React.PropTypes.string.isRequired,
  subcategory: React.PropTypes.string
};

HeadlineBlock.defaultProps = {
  subcategory: ''
};

export default HeadlineBlock;
