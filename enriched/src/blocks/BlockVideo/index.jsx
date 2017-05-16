import React from 'react';

if (process.env.BROWSER) {
  require('./b-video.scss');
}

const BlockVideo = (props) => {
  const { caption, subtext, videoUrl } = props;

  return (
    <section className="b-video">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-9">
            <div className="b-video__container">
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

BlockVideo.propTypes = {
  caption: React.PropTypes.string,
  subtext: React.PropTypes.string,
  videoUrl: React.PropTypes.string
};

BlockVideo.defaultProps = {
  subtext: '',
  caption: '',
  videoUrl: ''
};

export default BlockVideo;
