import React from 'react';
import { HeadlineBlock } from 'telus-thorium-enriched/blocks';

const HeadlineBlockExample = () => {
  const props = {
    caption: 'Headline title',
    eyebrow: 'Eyebrow'
  };

  return (
    <HeadlineBlock {...props} />
  );
};

export default HeadlineBlockExample;
