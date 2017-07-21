// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './hero-overlay.scss';

const HeroOverlay = ({ title, subtitle, contentAlign, backgroundImage, backgroundPosition }) => {
  const bgPosition = (backgroundPosition && backgroundPosition[0] !== '' && backgroundPosition[1] !== '') ? `${backgroundPosition[0]} ${backgroundPosition[1]}` : '';

  return (
    <div
      className={`hero-overlay ${contentAlign ? `align-content-${contentAlign.toLowerCase()}` : ''}`}
      style={{
        backgroundImage: `url(${backgroundImage.file ? backgroundImage.file.url : null})`,
        backgroundPosition: bgPosition
      }}>
      <div className="hero-overlay__container container container--fluid">
        <div className="hero-overlay__text">
          <h1 tabIndex={0} className="hero-overlay__title">
            {title}
          </h1>

          {
            subtitle &&
            <h4 tabIndex={0} className="hero-overlay__subtitle" >
              {subtitle}
            </h4>
          }
        </div>
      </div>
    </div>
  );
};

HeroOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.object.isRequired,
  backgroundPosition: PropTypes.array,
  contentAlign: PropTypes.string
};


export default HeroOverlay;
