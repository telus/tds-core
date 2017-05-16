import React from 'react';
import Card from '../../../components/Card';

if (process.env.BROWSER) {
  require('./c-quote-card.scss');
}

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
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  clientName: React.PropTypes.string.isRequired,
  clientLogo: React.PropTypes.object
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
