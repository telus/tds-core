import React from 'react';
import PropTypes from 'prop-types';

import './Headline.scss';

const Headline = (props) => {
  const { eyebrow, title } = props;

  return (
    <div className="headline-block__bg">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-6 large-7 xl-7">
            <p className="heading-4 headline-block--grape">{eyebrow}</p>
            <h1 className="display-heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string
};

Headline.defaultProps = {
  eyebrow: ''
};

export default Headline;
