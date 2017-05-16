import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import BlockHeroWaveTitleEyebrow from '../';

describe('BlockHeroWaveTitleEyebrow', () => {
  const data = { eyebrow: 'Foo', title: 'Bar' };

  it('matches snapshot', () => {
    const wrapper = mount(<BlockHeroWaveTitleEyebrow {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render eyebrow', () => {
    const wrapper = mount(<BlockHeroWaveTitleEyebrow {...data} />);
    expect(wrapper.find('p').first().render().text()).toEqual('Foo');
  });

  it('should render without subcategory', () => {
    const wrapper = mount(<BlockHeroWaveTitleEyebrow title={data.title} />);
    expect(wrapper.find('p').first().render().text()).toEqual('');
  });

  it('should render title', () => {
    const wrapper = mount(<BlockHeroWaveTitleEyebrow {...data} />);
    expect(wrapper.find('h1').first().render().text()).toEqual('Bar');
  });

  it('should use headline style', () => {
    const wrapper = mount(<BlockHeroWaveTitleEyebrow {...data} />);
    expect(wrapper.find('div').first().hasClass('b-hero-wave-title-eyebrow__bg')).toBeTruthy();
  });
});
