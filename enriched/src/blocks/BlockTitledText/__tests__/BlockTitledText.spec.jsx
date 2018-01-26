import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BlockTitledText from '../';

describe('BlockTitledText Component', () => {
  describe('with missing props', () => {
    it('sets an optional heading class', () => {
      const incompleteProps = {
        title: 'My title'
      };
      const blockTitledText = shallow(<BlockTitledText {...incompleteProps} />);

      expect(blockTitledText.find('h1').hasClass('heading-1')).toBe(true);
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
      const blockTitledText = shallow(<BlockTitledText {...data} />);
      expect(shallowToJson(blockTitledText)).toMatchSnapshot();
    });

    it('should render title with default class and WithLegal', () => {
      const blockTitledText = shallow(<BlockTitledText {...data} />);
      const title = blockTitledText.find('h1').first();
      expect(title.hasClass('heading-1')).toBeTruthy();
      expect(blockTitledText.find('h1 WithLegal').props().content).toBe('Title1');
    });

    it('should render title with specified class', () => {
      const blockTitledText = shallow(<BlockTitledText {...data} titleStyle="heading-2" />);
      const title = blockTitledText.find('h1').first();
      expect(title.hasClass('heading-2')).toBeTruthy();
    });

    it('should render a ComponentTitledText', () => {
      const props = {
        title: 'Title1',
        content: [
          { title: 'Small Title 1', content: 'Small Text 1' }
        ]
      };

      const blockTitledText = shallow(<BlockTitledText {...props} />);
      expect(blockTitledText.find('ComponentTitledText').props()).toHaveProperty('title', 'Small Title 1');
      expect(blockTitledText.find('ComponentTitledText').props()).toHaveProperty('text', 'Small Text 1');
    });

    it('should render multiple ComponentTitledText', () => {
      const props = {
        title: 'Title1',
        content: [
          { title: 'Small Title 1', content: 'Small Text 1' },
          { title: 'Small Title 2', content: 'Small Text 2' }
        ]
      };

      const blockTitledText = shallow(<BlockTitledText {...props} />);
      expect(blockTitledText.find('ComponentTitledText')).toHaveLength(2);
    });
  });
});
