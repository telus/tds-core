import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import TitledText from '../TitledText';

describe('TitledText', () => {
  const data = {
    title: 'Title1',
    content: [
      { title: 'Small Title 1', content: 'Small Text1' }
    ]
  };

  it('matches snapshot', () => {
    const wrapper = mount(<TitledText {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render title with default class', () => {
    const wrapper = mount(<TitledText {...data} />);
    const elem = wrapper.find('h1').first();
    expect(elem.text()).toEqual('Title1');
    expect(elem.hasClass('heading-1')).toBeTruthy();
  });

  it('should render title with specified class', () => {
    const wrapper = mount(<TitledText {...data} titleHeadingClass="heading-2" />);
    const elem = wrapper.find('h1').first();
    expect(elem.text()).toEqual('Title1');
    expect(elem.hasClass('heading-2')).toBeTruthy();
  });

  it('should render content', () => {
    const wrapper = mount(<TitledText {...data} />);
    expect(wrapper.find('h2').first().text()).toEqual('Small Title 1');
    expect(wrapper.find('p').first().text()).toEqual('Small Text1');
  });
});
