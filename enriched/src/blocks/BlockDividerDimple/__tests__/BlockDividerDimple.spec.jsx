import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DividerDimpleBlock from '../';

describe('DividerDimple', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<DividerDimpleBlock />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should use divider dimple style', () => {
    const wrapper = shallow(<DividerDimpleBlock />);
    expect(wrapper.hasClass('b-divider-dimple__bg')).toBeTruthy();
  });
});
