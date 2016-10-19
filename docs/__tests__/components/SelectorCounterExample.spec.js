import React from 'react';
import { shallow } from 'enzyme';
import SelectorCounterExample from '../../src/js/components/SelectorCounterExample';

it('SelectorCounterExample renders an element', () => {
  const sc = shallow(<SelectorCounterExample />);

  expect(sc.length).toEqual(1);
});
