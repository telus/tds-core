import React from 'react';
import BlockHeroWaveTitleEyebrow from 'telus-thorium-enriched/blocks/BlockHeroWaveTitleEyebrow';

const BlockHeroWaveTitleEyebrowExample = () => {
  const props = {
    title: 'Headline title',
    eyebrow: 'Eyebrow'
  };

  return (
    <BlockHeroWaveTitleEyebrow {...props} />
  );
};

export default BlockHeroWaveTitleEyebrowExample;
