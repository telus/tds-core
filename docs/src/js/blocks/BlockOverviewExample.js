import React from 'react';
import { BlockOverview } from 'telus-thorium-enriched/blocks';

const BlockOverviewExample = () => {
  const props = {
    className: 'class',
    overviewTitle: 'Lorem Ipsum',
    overviewDescription: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    },
    sideContent: {
      listTitle: 'List of Numbers',
      listItems: ['one', 'two', 'three']
    }
  };

  return (
    <BlockOverview {...props} />
  );
};

export default BlockOverviewExample;
