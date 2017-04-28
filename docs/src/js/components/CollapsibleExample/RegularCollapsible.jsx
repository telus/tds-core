import React from 'react';
import { Collapsible } from 'telus-thorium-enriched';

const RegularCollapsibleExample = () => {
    return (
      <Collapsible.Group disabledKeys={["panel-3"]}>
        <Collapsible.Panel header="Panel #1">
          Panel #1 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          Panel #2 Body
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #3 is disabled" panelKey="panel-3">
          Panel #3 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default RegularCollapsibleExample;
