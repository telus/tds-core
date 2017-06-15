import PropTypes from 'prop-types';
import React from 'react';
import ComponentQuoteCard from '../ComponentQuoteCard';
import './b-image-centred-quote.scss';

/**
 * BlockImageCenteredQuote is composed of a full width banner image (usually related to the quote)
 * and a ComponentQuoteCard.
 *
 * Contentful model (BUS > Marketing): Quote Banner Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-58
 */
const BlockImageCentredQuote = (props) => {
  const { quote, author, clientName, bannerImage, clientLogo } = props;

  return (
    <section className="b-image-centred-quote">
      { bannerImage && bannerImage.file &&
        <img className="b-image-centred-quote__img" src={bannerImage.file.url} alt={bannerImage.title} />
      }
      <div className="container b-image-centred-quote__card">
        <div className="grid-row">
          <div className="large-6 offset-large-3 medium-6 offset-medium-3 small-12">
            <ComponentQuoteCard quote={quote} author={author} clientName={clientName} clientLogo={{ url: clientLogo.file.url, title: clientLogo.title }} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlockImageCentredQuote.propTypes = {
  /** Contentful media field, recommended specification: greater than 1440 x 500 */
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

BlockImageCentredQuote.defaultProps = {
  clientLogo: {
    file: {
      url: ''
    },
    title: ''
  }
};

export default BlockImageCentredQuote;
