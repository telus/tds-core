import React, { Component, PropTypes } from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const numberHeader = title => ({ ordinal }) => `${ordinal}. ${title}`;

// Render the React element if the predicate is true.
const renderIf = predicate => elem => predicate ? elem : null;

const NumberedExpandCollapseExample = () => (
  <div>
    <ExpandCollapse.Group>
      <ExpandCollapse.Panel header={numberHeader('Visible content')}>
        Lorem Ipsum
      </ExpandCollapse.Panel>
      {renderIf(false)(<ExpandCollapse.Panel header={numberHeader('Hidden content')}>
        Hidden content
      </ExpandCollapse.Panel>)}
      <ExpandCollapse.Panel header={numberHeader('More visible content')}>
        Lorem Ipsum
      </ExpandCollapse.Panel>
    </ExpandCollapse.Group>
  </div>
);

export default NumberedExpandCollapseExample;
