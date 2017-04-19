import React from 'react';
import VideoBlock from 'telus-thorium-enriched/blocks/VideoBlock';

const VideoBlockExample = () => {
  const props = {
    caption: 'Video caption title',
    subtext: 'Video caption short description',
    videoUrl: 'https://www.youtube.com/embed/0JQDjQj50qI'
  };

  return (
    <VideoBlock {...props} />
  );
};

export default VideoBlockExample;
