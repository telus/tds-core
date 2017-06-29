import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import ComponentChecklist from '../ComponentChecklist';
import ComponentTextEyebrowTitleBodyButton from '../ComponentTextEyebrowTitleBodyButton';

if (process.env.BROWSER) {
  require('./b-overview.scss');
}

/**
 * BlockOverview is composed of a [ComponentTextEyebrowTitleBodyButton](#componenttexteyebrowtitlebodybutton) and a [ComponentChecklist](#componentchecklist).
 * Rendering of the ComponentChecklist is optional.
 *
 * Contentful models (BUS > Marketing): Overview Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-30
 */
const BlockOverview = ({ className, ctaLink, overviewTitle, overviewDescription, sideContent }) => (
  <section className={cx('b-overview', 'container', 'container--limited-width', className)}>
    <div className="grid-row">
      <div className="large-7 medium-7 small-12 b-overview__body">
        <ComponentTextEyebrowTitleBodyButton
          headingClass="heading-4"
          link={ctaLink}
          title={overviewTitle}
          content={overviewDescription}
        />
      </div>
      <div className="large-4 offset-large-1 medium-5 small-12 b-overview__checklist">
        <ComponentChecklist {...sideContent} />
      </div>
    </div>
  </section>
);

BlockOverview.propTypes = {
  className: PropTypes.string,
  /** props consumed by ComponentTextEyebrowTitleBodyButton */
  overviewTitle: PropTypes.string,
  /** props consumed by ComponentTextEyebrowTitleBodyButton */
  overviewDescription: PropTypes.string,
  /** props consumed by ComponentTextEyebrowTitleBodyButton */
  ctaLink: PropTypes.shape({
    target: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string
  }),
  /** props consumed by ComponentChecklist */
  sideContent: PropTypes.shape({
    listTitle: PropTypes.string,
    listItems: PropTypes.list
  })
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
