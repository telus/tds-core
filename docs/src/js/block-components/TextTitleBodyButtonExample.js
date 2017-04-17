import React from 'react';
import TextTitleBodyButton from 'telus-thorium-enriched/blocks/components/TextTitleBodyButton';

const TextTitleBodyButtonExample = () => {
  const props = {
    className: 'class',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, modo scaevola pertinax ius no. Ut brute nobis intellegam duo, ullum fabulas fabellas quo at.',
    ctaLink: {
      target: '_blank',
      href: 'https://www.telus.com',
      text: 'Go Home'
    }
  };

  return (
    <TextTitleBodyButton {...props}/>
  );
}

export default TextTitleBodyButtonExample;
