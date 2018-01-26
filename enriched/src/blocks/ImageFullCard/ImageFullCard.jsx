// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './image-full-card.scss';

const ImageFullCard = ({ content }) => {
  const background = {
    backgroundImage: `url(${content.image.file.url})`
  };

  return (
    <div
      id={content.id}
      className={`image-full-card ${content.contentAlign === 'Right' ? 'image-full-card--right' : 'image-full-card--left'}`}
      style={background}>
      <div className="container container--fluid">
        <div className="image-full-card__image hidden-small-up" style={background} />
        <div className="image-full-card__content">
          {
            content.headline &&
            <h2 tabIndex="0" className="image-full-card__headline">{content.headline}</h2>
          }
          <p className="text--medium">{content.description}</p>
          {
            content.legalText &&
            <p className="text--small">{content.legalText}</p>
          }
        </div>
      </div>
    </div>
  );
};

ImageFullCard.propTypes = {
  content: PropTypes.object.isRequired
};


export default ImageFullCard;
