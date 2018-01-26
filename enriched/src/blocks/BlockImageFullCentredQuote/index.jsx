import PropTypes from 'prop-types';
import React from 'react';
import { components } from '@telusdigital/redux-contentful';
import ComponentQuoteCard from '../ComponentQuoteCard';

if (process.env.BROWSER) {
  require('./b-image-full-centred-quote.scss');
}

const { ResponsiveImage } = components;

/**
 * BlockImageFullCentredQuote is composed of a full bleed banner image (usually related to the quote)
 * and a [ComponentQuoteCard](#componentquotecard).
 *
 * Contentful model (BUS > Marketing): Quote Banner Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-58
 */
const BlockImageFullCentredQuote = ({ bannerImage, ...rest }) => (
  <section className="b-image-full-centred-quote">
    { bannerImage && bannerImage.file &&
    <ResponsiveImage className="b-image-full-centred-quote__img" imageData={bannerImage} xs={576} sm={768} md={992} lg={1200} xl={1440} />
      }
    <div className="container b-image-full-centred-quote__card">
      <div className="grid-row">
        <div className="large-6 offset-large-3 medium-6 offset-medium-3 small-12">
          <ComponentQuoteCard {...rest} />
        </div>
      </div>
    </div>
  </section>
);

BlockImageFullCentredQuote.propTypes = {
  /** Contentful media field, recommended specification: 1440 x 720 */
  bannerImage: PropTypes.shape({
    title: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  }),
  /** prop consumed by ComponentQuoteCard */
  quote: PropTypes.string,
  /** prop consumed by ComponentQuoteCard */
  author: PropTypes.string,
  /** prop consumed by ComponentQuoteCard */
  clientName: PropTypes.string,
  /** Contentful media field, prop consumed by ComponentQuoteCard */
  clientLogo: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

BlockImageFullCentredQuote.defaultProps = {
  clientLogo: {
    file: {
      url: ''
    },
    title: ''
  }
};

export default BlockImageFullCentredQuote;
