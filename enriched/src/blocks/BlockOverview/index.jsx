import React from 'react';
import cx from 'classnames';
import ComponentChecklist from '../components/ComponentChecklist';
import ComponentTextTitleBodyButton from '../components/ComponentTextTitleBodyButton';

if (process.env.BROWSER) {
  require('./b-overview.scss');
}

const BlockOverview = (props) => {
  const { className, ctaLink, overviewTitle, overviewDescription, sideContent } = props;
  const cls = cx(className);
  const bodyContent = {
    ctaLink,
    caption: overviewTitle,
    description: overviewDescription
  };

  return (
    <section className={`${cls} b-overview container container--limited-width`}>
      <div className="grid-row">
        <div className="large-7 medium-7 small-12 b-overview__body">
          <ComponentTextTitleBodyButton {...bodyContent} />
        </div>
        <div className="large-4 offset-large-1 medium-5 small-12 b-overview__checklist">
          <ComponentChecklist {...sideContent} />
        </div>
      </div>
    </section>
  );
};

BlockOverview.propTypes = {
  className: React.PropTypes.string,
  overviewTitle: React.PropTypes.string,
  overviewDescription: React.PropTypes.string,
  ctaLink: React.PropTypes.object,
  sideContent: React.PropTypes.object
};

BlockOverview.defaultProps = {
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

export default BlockOverview;
