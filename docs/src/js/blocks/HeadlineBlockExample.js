import React from 'react';
import { Headline } from 'telus-thorium-enriched/blocks';

const HeadlineBlockExample = () => {
  const props = {
    title: 'Headline title',
    eyebrow: 'Eyebrow'
  };

  return (
    <Headline {...props} />
  );
};

export default HeadlineBlockExample;
