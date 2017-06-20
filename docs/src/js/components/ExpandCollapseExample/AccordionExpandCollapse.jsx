import React from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const AccordionExpandCollapseExample =() => {
    return (
      <ExpandCollapse.Group accordion>
        <ExpandCollapse.Panel header="Panel #1">
          Panel #1 Body
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #2">
          Panel #2 Body
        </ExpandCollapse.Panel>
      </ExpandCollapse.Group>
    );
}

export default AccordionExpandCollapseExample;
