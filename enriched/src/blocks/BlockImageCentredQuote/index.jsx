import React from 'react';
import ComponentQuoteCard from '../components/ComponentQuoteCard';

if ( process.env.BROWSER ) {
  require('./b-image-centred-quote.scss');
}

const BlockImageCentredQuote = (props) => {
  const { quote, author, clientName, bannerImage, clientLogo } = props;

  return (
    <div className="b-image-centred-quote">
      { bannerImage.file.url && <img src={bannerImage.file.url} alt={bannerImage.title} /> }
      <div className="container b-image-centred-quote__card">
        <div className="grid-row">
          <div className="large-6 offset-large-3 medium-6 offset-medium-3 small-12">
            <ComponentQuoteCard quote={quote} author={author} clientName={clientName} clientLogo={{ url: clientLogo.file.url, title: clientLogo.title }} />
          </div>
        </div>
      </div>
    </div>
  );
};

BlockImageCentredQuote.propTypes = {
  quote: React.PropTypes.string,
  author: React.PropTypes.string,
  clientName: React.PropTypes.string,
  bannerImage: React.PropTypes.object,
  clientLogo: React.PropTypes.object
};

BlockImageCentredQuote.defaultProps = {
  bannerImage: {
    file: {
      url: ''
    }
  },
  clientLogo: {
    file: {
      url: ''
    },
    title: ''
  }
};

export default BlockImageCentredQuote;
