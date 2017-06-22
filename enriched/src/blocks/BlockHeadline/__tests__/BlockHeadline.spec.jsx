import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Headline from '../';

describe('Headline', () => {
  const data = { eyebrow: 'Foo', title: 'Bar' };

  it('matches snapshot', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render eyebrow', () => {
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
    expect(wrapper.find('section').first().hasClass('b-headline')).toBeTruthy();
  });

  it('should render subtext', () => {
    const wrapper = mount(<Headline {...data} subtext="These are the Foo Bars in your area." />);
    expect(wrapper.find('p').last().render().text()).toEqual('These are the Foo Bars in your area.');
  });

  it('should only render subtext p tag if present', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('should remove bottom margin of title when subtext is not present', () => {
    const wrapper = mount(<Headline {...data} />);
    expect(wrapper.find('h1').first().hasClass('bottom-margin-0')).toEqual(true);
  });

  it('should remove bottom margin of subtext when present but not title', () => {
    const wrapper = mount(<Headline {...data} subtext="These are the Foo Bars in your area." />);
    expect(wrapper.find('p').last().hasClass('bottom-margin-0')).toEqual(true);
    expect(wrapper.find('h1').last().hasClass('bottom-margin-0')).toEqual(false);
  });

});
