import React from 'react';
import CheckList from 'telus-thorium-enriched/blocks/components/CheckList/CheckList';

const CheckListExample = () => {
    return (
      <CheckList listTitle='List of Numbers' listItems={['one', 'two', 'three']}/>
    );
}

export default CheckListExample;
