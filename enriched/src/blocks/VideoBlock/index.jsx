import React from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./video-block.scss');
}

const VideoBlock = (props) => {
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

VideoBlock.propTypes = {
  caption: PropTypes.string,
  subtext: PropTypes.string,
  videoUrl: PropTypes.string
};

VideoBlock.defaultProps = {
  subtext: '',
  caption: '',
  videoUrl: ''
};

export default VideoBlock;
