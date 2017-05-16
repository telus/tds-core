import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import BlockHeroTitleEyebrow from '../';

describe('BlockHeroTitleEyebrow', () => {
  const stubHeroImage = { file: { url: 'some/url', title: 'Client logo title' } };
  const data = { eyebrow: 'Foo', title: 'Bar', heroImage: stubHeroImage };

  it('matches snapshot', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render eyebrow', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow {...data} />);
    expect(wrapper.find('p').first().render().text()).toEqual('Foo');
  });

  it('should render without subcategory', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow title={data.title} heroImage={stubHeroImage} />);
    expect(wrapper.find('p').first().render().text()).toEqual('');
  });

  it('should render title', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow {...data} />);
    expect(wrapper.find('h1').first().render().text()).toEqual('Bar');
  });

  it('should use headline style', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow {...data} />);
    expect(wrapper.find('section').children().first().hasClass('b-hero-title-eyebrow')).toBeTruthy();
  });

  it('should add the heroimage as a background', () => {
    const wrapper = mount(<BlockHeroTitleEyebrow {...data} />);
    expect(wrapper.find('.b-hero-title-eyebrow').prop('style')).toEqual({ backgroundImage: 'url(some/url)', backgroundPosition: 'center top', backgroundSize: 'cover', paddingBottom: '28.125%', position: 'relative', width: '100%' });
  });
});
