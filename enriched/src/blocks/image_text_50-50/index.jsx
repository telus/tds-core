// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './image_text_50-50.scss';

const ImageText5050 = (props) => {
  return (
    <div
      id={props.content.id}
      className={`image_text_50-50 ${props.content.imageAlign === 'Right' ? 'align-right' : ''} container container--fluid`}>
      <div className="image_text_50-50__content image_text_50-50__image">
        <img
          src={props.content.image.file.url}
          alt={props.content.image.description} />
      </div>
      <div className="image_text_50-50__content image_text_50-50__copy">
        <div className="inner-copy">
          {
            props.content.headline &&
            <h2 tabIndex="0" className="image_text_50-50__headline">{props.content.headline}</h2>
          }
          <p className="text--medium">{props.content.description}</p>
          {
            props.content.legalText &&
            <p className="text--small">{props.content.legalText}</p>
          }
        </div>
      </div>
    </div>
  );
};

ImageText5050.propTypes = {
  content: PropTypes.object
};


export default ImageText5050;
