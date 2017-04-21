import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import VideoBlock from '../';

describe('VideoBlock', () => {
  const data = { caption: 'Foo', subtext: 'Bar', videoUrl: 'https://www.youtube.com/embed/MaCZN2N6Q_I?cc_load_policy=1' };

  it('matches snapshot', () => {
    const wrapper = mount(<VideoBlock {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render caption', () => {
    const wrapper = mount(<VideoBlock {...data} />);
    expect(wrapper.find('strong')).toBeDefined();
    expect(wrapper.find('strong').text()).toBe('Foo: ');
  });

  it('should render subtext', () => {
    const wrapper = mount(<VideoBlock {...data} />);
    expect(wrapper.find('p').first().text()).toContain('Bar');
  });

  it('should render without title or subtext', () => {
    const wrapper = mount(<VideoBlock videoUrl={data.videoUrl} />);
    expect(wrapper.find('.text--medium').exists()).toEqual(false);
  });

  it('should render an iframe with video', () => {
    const wrapper = mount(<VideoBlock videoUrl={data.videoUrl} />);
    expect(wrapper.find('iframe').first().prop('src')).toEqual('https://www.youtube.com/embed/MaCZN2N6Q_I?cc_load_policy=1');
  });
});
