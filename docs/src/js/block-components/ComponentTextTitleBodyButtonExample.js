import React from 'react';
import ComponentTextTitleBodyButton from 'telus-thorium-enriched/blocks/components/ComponentTextTitleBodyButton';

const ComponentTextTitleBodyButtonExample = () => {
  const props = {
    className: 'class',
    caption: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    }
  };

  return (
    <ComponentTextTitleBodyButton {...props}/>
  );
}

export default ComponentTextTitleBodyButtonExample;
