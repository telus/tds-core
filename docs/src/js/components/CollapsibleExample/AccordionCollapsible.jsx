import React from 'react';
import { Collapsible } from 'telus-thorium-enriched';

const AccordionCollapsibleExample =() => {
    return (
      <Collapsible.Group accordion>
        <Collapsible.Panel header="Panel #1">
          Panel #1 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          Panel #2 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default AccordionCollapsibleExample;
