import React from 'react';
import ComponentQuoteCard from 'telus-thorium-enriched/blocks/components/ComponentQuoteCard';

const ComponentQuoteCardExample = () => {
    return (
      <ComponentQuoteCard
        quote = "Dolor sit amet quote"
        author = "The Author"
        clientName = "Client Name"
        clientLogo= {{ url: "https://static.telus.com/common/images/nav/bundle-services.png", title: "Client Logo Title" }}
        />
    );
}

export default ComponentQuoteCardExample;
