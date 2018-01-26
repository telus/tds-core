import PropTypes from 'prop-types';
import React from 'react';
import { components } from '@telusdigital/redux-contentful';
import Card from '../../components/Card';

if (process.env.BROWSER) {
  require('./c-quote-card.scss');
}

const { ResponsiveImage } = components;

/**
 * ComponentQuoteCard takes up the full width of its parent container.
 * It can be used with [BlockImageFullCenteredQuote](#blockimagefullcentredquote).
 *
 * Contentful model (BUS > Marketing): Quote Banner Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-58
 */
const ComponentQuoteCard = ({ quote, author, clientName, clientLogo }) => (
  <Card>
    <p className="c-quote-card__quote-text">&ldquo;{quote}&rdquo;</p>
    <div className="c-quote-card__author">

      <div className="c-quote-card__logo">
        { clientLogo && clientLogo.file &&
        <ResponsiveImage imageData={clientLogo} xs={50} sm={50} md={50} lg={50} xl={50} />
          }
      </div>

      <div className="text--medium c-quote-card__names">
        <strong>{author}</strong><br />
        {clientName}
      </div>

    </div>
  </Card>
);

ComponentQuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  /** recommended: not more than one line */
  author: PropTypes.string.isRequired,
  /** recommended: not more than one line */
  clientName: PropTypes.string.isRequired,
  /** Contentful media field, recommended specification: square (e.g. 50 x 50). Layout will not handle client logo not being present. */
  clientLogo: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

ComponentQuoteCard.defaultProps = {
  quote: '',
  author: '',
  clientName: '',
  clientLogo: {
    file: {
      url: ''
    },
    title: ''
  }
};

export default ComponentQuoteCard;
