import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckList from '../components/CheckList/CheckList';
import TextTitleBodyButton from '../components/TextTitleBodyButton/TextTitleBodyButton';

const Overview = (props) => {
  const { className, ctaLink, overviewTitle, overviewDescription, sideContent } = props;
  const cls = cx(className);
  const bodyContent = {
    ctaLink,
    caption: overviewTitle,
    description: overviewDescription
  };
  return (
    <div className={`${cls} container container--limited-width`}>
      <div className="grid-row">
        <div className="large-7 medium-7 small-12">
          <TextTitleBodyButton {...bodyContent} />
        </div>
        <div className="large-4 offset-large-1 medium-5 small-12">
          <CheckList {...sideContent} />
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  className: PropTypes.string,
  overviewTitle: PropTypes.string,
  overviewDescription: PropTypes.string,
  ctaLink: PropTypes.object,
  sideContent: PropTypes.object
};

Overview.defaultProps = {
  className: '',
  overviewTitle: '',
  overviewDescription: '',
  ctaLink: {
    target: '',
    href: '',
    text: ''
  },
  sideContent: {
    listTitle: '',
    listItems: []
  }
};

export default Overview;
