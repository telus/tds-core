import React from 'react';
import { shallow } from 'enzyme';
import SelectorCounter from '../../../src/components/SelectorCounter';

it('SelectorCounter renders an element', () => {
  const sc = shallow(<SelectorCounter/>);

  expect(sc.length).toEqual(1);
});
