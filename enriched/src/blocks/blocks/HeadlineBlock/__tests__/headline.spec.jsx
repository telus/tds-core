import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Headline from '../';

describe('Headline', () => {
  const data = { subcategory: 'Foo', title: 'Bar' };

  it('matches snapshot', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render subcategory', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(wrapper.find('p').first().render().text()).toEqual('Foo');
  });

  it('should render without subcategory', () => {
    const wrapper = mount(<Headline title={data.title} />);
    expect(wrapper.find('p').first().render().text()).toEqual('');
  });

  it('should render title', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(wrapper.find('h1').first().render().text()).toEqual('Bar');
  });

  it('should use headline style', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(wrapper.find('div').first().hasClass('headline-block__bg')).toBeTruthy();
  });
});
