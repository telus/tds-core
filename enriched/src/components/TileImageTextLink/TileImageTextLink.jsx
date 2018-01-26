// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './tile-image-text-link.scss';

const TileImageTextLink = ({ content, buttonText, className }) => {
  return (
    <div className={`tile-image-text-link ${className}`}>
      <a tabIndex={-1} href={content.url}>
        <img
          className="tile-image-text-link__image"
          src={content.image.file.url} alt={content.image.description} />
      </a>
      {
        content.title &&
        <h4 className="tile-image-text-link__title" tabIndex="0">{content.title}</h4>
      }
      <p className="text--medium">{content.description}</p>
      <a
        href={content.url}
        className="text--medium chevron-link--primary tile-image-text-link__link"
        role="button">
        {buttonText}
      </a>
    </div>
  );
};

TileImageTextLink.propTypes = {
  content: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string
};


export default TileImageTextLink;
