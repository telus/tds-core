import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./b-headline.scss');
}

/**
 * BlockHeadline is usually rendered at the top of a page. It consists of a title,
 * and an optional eyebrow and an optional body, overlaid on top of a wave image.
 * Other variations include [BlockHero](#blockhero) and [BlockHeroOverlay](#blockherooverlay).
 *
 * Contentful models (BUS > Marketing): Headline Block
 */
const BlockHeadline = ({ eyebrow, title, subtext }) => (
  <section className="b-headline">
    <div className="container container--limited-width">
      <div className="grid-row">
        <div className="medium-6 large-7 xl-7">
          <p className="heading-4">{eyebrow}</p>
          <h1 className={`display-heading-1 ${subtext || 'bottom-margin-0'}`}>{title}</h1>
          {subtext && <p className="bottom-margin-0">{subtext}</p>}
        </div>
      </div>
    </div>
  </section>
);

BlockHeadline.propTypes = {
  /** recommended: text should fit in one line */
  title: PropTypes.string.isRequired,
  /** recommended: text should fit in one line */
  eyebrow: PropTypes.string,
  subtext: PropTypes.string
};

BlockHeadline.defaultProps = {
  eyebrow: '',
  subtext: ''
};

export default BlockHeadline;
