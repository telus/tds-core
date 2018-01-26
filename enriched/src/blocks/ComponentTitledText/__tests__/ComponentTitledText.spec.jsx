import React from 'react';
import { shallow } from 'enzyme';
import ComponentTitledText from '../';

describe('ComponentTitledText', () => {
  const props = {
    title: 'Small Title 1',
    text: 'Small Text 1'
  };

  it('should render content WithLegal', () => {
    const wrapper = shallow(<ComponentTitledText {...props} />);
    expect(wrapper.find('h3 WithLegal').props().content).toBe('Small Title 1');
    expect(wrapper.find('p WithLegal').props().content).toBe('Small Text 1');
  });
});
