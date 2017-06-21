import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BlockTitledText from '../';

describe('BlockTitledText Component', () => {
  describe('with missing props', () => {
    const incompleteProps = {
      title: 'My title'
    };
    it('will not break', () => {
      const wrapper = shallow(<BlockTitledText {...incompleteProps} />);
      expect(wrapper.find('section').exists()).toEqual(true);
    });
  });

  describe('with props', () => {
    const data = {
      title: 'Title1',
      content: [
        { title: 'Small Title 1', content: 'Small Text1' }
      ]
    };

    it('matches snapshot', () => {
      const wrapper = shallow(<BlockTitledText {...data} />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render title with default class and WithLegal', () => {
      const wrapper = shallow(<BlockTitledText {...data} />);
      const elem = wrapper.find('h1').first();
      expect(elem.hasClass('heading-1')).toBeTruthy();
      expect(wrapper.find('h1 WithLegal').props().content).toBe('Title1');
    });

    it('should render title with specified class', () => {
      const wrapper = shallow(<BlockTitledText {...data} titleStyle="heading-2" />);
      const elem = wrapper.find('h1').first();
      expect(elem.hasClass('heading-2')).toBeTruthy();
    });

    it('should render a ComponentTitledText', () => {
      const props = {
        title: 'Title1',
        content: [
          { title: 'Small Title 1', content: 'Small Text 1' }
        ]
      };

      const wrapper = shallow(<BlockTitledText {...props} />);
      expect(wrapper.find('ComponentTitledText').props()).toHaveProperty('title', 'Small Title 1');
      expect(wrapper.find('ComponentTitledText').props()).toHaveProperty('text', 'Small Text 1');
    });

    it('should render multiple ComponentTitledText', () => {
      const props = {
        title: 'Title1',
        content: [
          { title: 'Small Title 1', content: 'Small Text 1' },
          { title: 'Small Title 2', content: 'Small Text 2' }
        ]
      };

      const wrapper = shallow(<BlockTitledText {...props} />);
      expect(wrapper.find('ComponentTitledText')).toHaveLength(2);
    });
  });
});
