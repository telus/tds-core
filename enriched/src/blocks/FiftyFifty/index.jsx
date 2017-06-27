// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './FiftyFifty.scss';

const FiftyFifty = (props) => {
  return (
    <div
      id={props.content.id}
      className={`fiftyfifty ${props.content.imageAlign === 'Right' ? 'align-right' : ''} container container--fluid`}>
      <div className="fiftyfifty__content fiftyfifty__image">
        <img
          src={props.content.image.file.url}
          alt={props.content.image.description} />
      </div>
      <div className="fiftyfifty__content fiftyfifty__copy">
        <div className="inner-copy">
          {
            props.content.headline &&
            <h2 tabIndex="0" className="fiftyfifty__headline">{props.content.headline}</h2>
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

FiftyFifty.propTypes = {
  content: PropTypes.object
};


export default FiftyFifty;
