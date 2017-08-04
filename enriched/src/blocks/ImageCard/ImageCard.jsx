// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './image-card.scss';

const ImageCard = ({ content, children }) => {
  const background = {
    backgroundImage: `url(${content.bannerImage.file.url})`
  };

  return (
    <div
      className={`
        image-card container container--fluid
        ${content.contentAlign === 'Left' ? 'image-card--left' : 'image-card--right'}`}
      id={content.id}
    >
      {
        content.headline &&
          <h2 className="image-card__headline" tabIndex="0">{content.headline}</h2>
      }
      <div className="image-card__block" style={background}>
        <img
          className="image-card__image"
          src={content.bannerImage.file.url} 
          alt={content.bannerImage.description} />
        <div className="image-card__content">
          { children }
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  content: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};


export default ImageCard;
