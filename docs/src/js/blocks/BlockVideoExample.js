import React from 'react';
import { BlockVideo } from 'telus-thorium-enriched/blocks';

const BlockVideoExample = () => {
  const props = {
    caption: 'Video caption title',
    subtext: 'Video caption short description',
    videoUrl: 'https://www.youtube.com/embed/0JQDjQj50qI'
  };

  return (
    <BlockVideo {...props} />
  );
};

export default BlockVideoExample;
