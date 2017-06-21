import React from 'react';
import { mount } from 'enzyme';
import RibbonText from '../';

describe('<RibbonText />', () => {
  const content = 'Sale';
  
  it('should render the component', () => {
    const wrapper = mount(
      <RibbonText content={content} />
    );
    expect(wrapper.find('.ribbon-text__content').render().length).toEqual(1);
  });
});
