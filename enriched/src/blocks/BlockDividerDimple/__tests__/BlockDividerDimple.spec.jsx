import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import BlockDividerDimple from '../';

describe('DividerDimple', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<BlockDividerDimple />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should use divider dimple style', () => {
    const wrapper = shallow(<BlockDividerDimple />);
    expect(wrapper.hasClass('b-divider-dimple__bg')).toBeTruthy();
  });
});
