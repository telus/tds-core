import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CheckList from '../components/CheckList';
import TextTitleBodyButton from '../components/TextTitleBodyButton';

const OverviewBlock = (props) => {
  const { className, ctaLink, overviewTitle, overviewDescription, sideContent } = props;
  const cls = cx(className);
  const bodyContent = {
    ctaLink,
    caption: overviewTitle,
    description: overviewDescription
  };
  return (
    <div className={`${cls} tds-container tds-container--limited-width`}>
      <div className="tds-grid-row">
        <div className="tds-large-7 tds-medium-7 tds-small-12">
          <TextTitleBodyButton {...bodyContent} />
        </div>
        <div className="tds-large-4 tds-offset-large-1 tds-medium-5 small-12">
          <CheckList {...sideContent} />
        </div>
      </div>
    </div>
  );
};

OverviewBlock.propTypes = {
  className: PropTypes.string,
  overviewTitle: PropTypes.string,
  overviewDescription: PropTypes.string,
  ctaLink: PropTypes.object,
  sideContent: PropTypes.object
};

OverviewBlock.defaultProps = {
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

export default OverviewBlock;
