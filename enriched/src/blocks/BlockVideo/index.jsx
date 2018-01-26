import PropTypes from 'prop-types';
import React from 'react';
import './b-video.scss';

/**
 * BlockVideo is composed of a youtube video in an iframe, and optionally, a title and short description underneath..
 * The video is left aligned, taking up 8 grid columns at medium width and higher. When the screen size is smaller, the video is centered.
 *
 * Contentful models (BUS > Marketing): Video Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-55
 */
const BlockVideo = ({ caption, subtext, videoUrl }) => (
  <section className="b-video">
    <div className="container container--limited-width">
      <div className="grid-row">
        <div className="medium-9">
          <div className="b-video__container">
            <iframe allowFullScreen="" frameBorder="0" src={videoUrl} title={caption}/>
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

BlockVideo.propTypes = {
  caption: PropTypes.string,
  subtext: PropTypes.string,
  videoUrl: PropTypes.string.isRequired
};

BlockVideo.defaultProps = {
  subtext: '',
  caption: ''
};

export default BlockVideo;
