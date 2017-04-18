import React from 'react';
import VideoBlock from 'telus-thorium-enriched/blocks/VideoBlock';

const VideoBlockExample = () => {
  const props = {
    title: 'Video title',
    subtext: 'Video short description',
    videoUrl: 'https://www.youtube.com/embed/0JQDjQj50qI'
  };

  return (
    <VideoBlock {...props} />
  );
};

export default VideoBlockExample;
