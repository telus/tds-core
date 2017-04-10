import React from 'react';
import { CheckList } from 'telus-thorium-enriched';

const CheckListExample = () => {
    return (
      <CheckList header='List of Numbers' list={['one', 'two', 'three']}/>
    );
}

export default CheckListExample;
