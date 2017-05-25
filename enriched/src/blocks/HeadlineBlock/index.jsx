import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./headline.scss');
}

const HeadlineBlock = (props) => {
  const { eyebrow, title } = props;

  return (
    <div className="headline-block__bg">
      <div className="tds-container tds-container--limited-width">
        <div className="tds-grid-row">
          <div className="tds-medium-6 tds-large-7 tds-xl-7">
            <p className="heading-4 headline-block--grape">{eyebrow}</p>
            <h1 className="display-heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

HeadlineBlock.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string
};

HeadlineBlock.defaultProps = {
  eyebrow: ''
};

export default HeadlineBlock;
