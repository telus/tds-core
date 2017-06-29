import PropTypes from 'prop-types';
import React from 'react';

if (process.env.BROWSER) {
  require('./b-hero.scss');
}

/**
 * BlockHero is usually rendered at the top of a page. It consists of a title and an eyebrow (left-aligned),
 * and a hero image as the background overlaid with a wave image.
 * Other variations include [BlockHeroOverlay](#blockherooverlay)
 *
 * Contentful models (BUS > Marketing): Headline Block
 */
const BlockHero = ({ eyebrow, title, heroImage }) => {
  const headerImage = {
    backgroundImage: `url(${heroImage && heroImage.file && heroImage.file.url})`,
    paddingBottom: '28.125%',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%'
  };

  return (
    <section className="b-hero">
      <div className="b-hero__image" style={headerImage} />
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-12">
            <p className="heading-4 b-hero__eyebrow">{eyebrow}</p>
            <h1 className="display-heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

BlockHero.propTypes = {
  /** recommended: text should fit in one line */
  title: PropTypes.string.isRequired,
  /** recommended: text should fit in one line */
  eyebrow: PropTypes.string,
  /** Contentful media field, recommended specification: greater than 1440 x 400 */
  heroImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  })
};

BlockHero.defaultProps = {
  eyebrow: ''
};

export default BlockHero;
