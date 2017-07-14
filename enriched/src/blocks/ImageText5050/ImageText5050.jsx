// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './ImageText5050.scss';

const ImageText5050 = ({ content }) => {
  return (
    <div
      id={content.id ? content.id : ''}
      className={`image_text_50-50 ${content.imageAlign === 'Right' ? 'align-right' : ''} container container--fluid`}>
      <div className="image_text_50-50__content image_text_50-50__image">
        <img
          src={content.image.file.url}
          alt={content.image.description} />
      </div>
      <div className="image_text_50-50__content image_text_50-50__copy">
        <div className="inner-copy">
          {
            content.headline &&
            <h2 tabIndex="0" className="image_text_50-50__headline">{content.headline}</h2>
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

ImageText5050.propTypes = {
  content: PropTypes.object.isRequired
};


export default ImageText5050;
