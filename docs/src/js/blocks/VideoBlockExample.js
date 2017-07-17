import React from 'react';
import { Video } from 'telus-thorium-enriched/blocks';

const VideoBlockExample = () => {
  const props = {
    caption: 'Video caption title',
    subtext: 'Video caption short description',
    videoUrl: 'https://www.youtube.com/embed/0JQDjQj50qI'
  };

  return (
    <Video {...props} />
  );
};

export default VideoBlockExample;
