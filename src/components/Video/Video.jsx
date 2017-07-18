import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';

const Video = (props) => {
  const { caption, subtext, videoUrl } = props;

  return (
    <section className="video-block">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-8">
            <div className="video-container-block">
              <iframe allowFullScreen="" frameBorder="0" src={videoUrl} title={caption} />
            </div>
            { caption && <p className="text text--medium">
              <strong>{caption}: </strong>
              {subtext}
            </p>}
          </div>
        </div>
      </div>
    </section>
  );
};

Video.propTypes = {
  caption: PropTypes.string,
  subtext: PropTypes.string,
  videoUrl: PropTypes.string
};

Video.defaultProps = {
  subtext: '',
  caption: '',
  videoUrl: ''
};

export default Video;
