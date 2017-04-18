import React from 'react';
import cx from 'classnames';
import CheckList from '../../components/CheckList';
import TextTitleBodyButton from '../../components/TextTitleBodyButton';

const OverviewBlock = (props) => {
  const {className, ctaLink, overviewTitle, overviewDescription, sideContent} = props;
  const cls = cx(className);
  const bodyContent = {
    ctaLink,
    title: overviewTitle,
    description: overviewDescription
  };
  return (
    <div className={`${cls} container container--limited-width`}>
      <div className="grid-row">
        <div className="large-7 medium-7 small-12">
          <TextTitleBodyButton {...bodyContent}/>
        </div>
        <div className="large-4 offset-large-1 medium-5 small-12">
          <CheckList {...sideContent}/>
        </div>
      </div>
    </div>
  );
};

OverviewBlock.propTypes = {
  className: React.PropTypes.string,
  overviewTitle: React.PropTypes.string,
  overviewDescription: React.PropTypes.string,
  ctaLink: React.PropTypes.object,
  sideContent: React.PropTypes.object
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
