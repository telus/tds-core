import React from 'react';
import {mount} from 'enzyme';
import {mountToJson} from 'enzyme-to-json';
import TitledTextBlock from '../';

describe('TextBlock Component', () => {
  const data = {
    title: 'Title1',
    content: [
      {title: 'Small Title 1', content: 'Small Text1'}
    ]
  };

  it('matches snapshot', () => {
    const wrapper = mount(<TitledTextBlock {...data} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('should render title', () => {
    const wrapper = mount(<TitledTextBlock {...data}/>);
    expect(wrapper.find('h1').first().render().text()).toEqual('Title1');
  });

  it('should render content', () => {
    const wrapper = mount(<TitledTextBlock {...data}/>);
    expect(wrapper.find('h3').first().render().text()).toEqual('Small Title 1');
    expect(wrapper.find('p').first().render().text()).toEqual('Small Text1');
  });
});
