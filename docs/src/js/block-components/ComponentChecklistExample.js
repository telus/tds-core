import React from 'react';
import ComponentChecklist from 'telus-thorium-enriched/blocks/components/ComponentChecklist';

const ComponentChecklistExample = () => {
    return (
      <ComponentChecklist listTitle='List of Numbers' listItems={['one', 'two', 'three']}/>
    );
}

export default ComponentChecklistExample;
