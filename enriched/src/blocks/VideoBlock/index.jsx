import React from 'react';

if ( process.env.BROWSER ) {
  require('./videoblock.scss');
}

const VideoBlock = (props) => {
  const { caption, subtext, videoUrl } = props;

  return (
    <div className="videoblock">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-8">
            <div className="video-container">
              <iframe allowFullScreen="" frameBorder="0" src={videoUrl} title={caption}></iframe>
            </div>
            { caption && <p className="text text--medium">
              <strong>{caption}: </strong>
              {subtext}
            </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

VideoBlock.propTypes = {
  caption: React.PropTypes.string,
  subtext: React.PropTypes.string,
  videoUrl: React.PropTypes.string
};

VideoBlock.defaultProps = {
  subtext: '',
  caption: '',
  videoUrl: ''
};

export default VideoBlock;
