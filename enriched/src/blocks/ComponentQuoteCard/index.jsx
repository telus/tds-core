import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'telus-thorium-enriched';
import './c-quote-card.scss';


/**
 * ComponentQuoteCard can be used with BlockImageCenteredQuote.
 * It takes up the full width of its parent container.
 *
 * Contentful models:
 * * Quote Banner Block (BUS > Marketing)
 *
 * https://telusdigital.atlassian.net/browse/BMK-58
 */
const ComponentQuoteCard = (props) => {
  const { quote, author, clientName, clientLogo } = props;

  return (
    <Card>
      <p className="c-quote-card__quote-text">&ldquo;{quote}&rdquo;</p>
      <div className="c-quote-card__author">

        <div className="c-quote-card__logo">
          { clientLogo.url && <img src={clientLogo.url} alt={clientLogo.title} /> }
        </div>

        <div className="text--medium c-quote-card__names">
          <strong>{author}</strong><br />
          {clientName}
        </div>

      </div>
    </Card>
  );
};

ComponentQuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  /** recommended: not more than one line */
  author: PropTypes.string.isRequired,
  /** recommended: not more than one line */
  clientName: PropTypes.string.isRequired,
  /** Contentful media field, recommended specification: square (e.g. 200 x 200). Layout will not handle client logo not being present. */
  clientLogo: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string
  })
};

ComponentQuoteCard.defaultProps = {
  quote: '',
  author: '',
  clientName: '',
  clientLogo: {
    url: '',
    title: ''
  }
};

export default ComponentQuoteCard;
