import React from 'react';
import { shallow } from 'enzyme';
import ComponentCardWithButton from '../';

describe('ComponentCardWithButton', () => {
  it('should render the card component if the link is missing', () => {
    const props = {
      content: 'test content',
      title: 'test title'
    };
    const wrapper = shallow(<ComponentCardWithButton {...props} />);
    expect(wrapper.find('Card').exists()).toEqual(true);
  });

  it('should render if it has at least an href in the link property', () => {
    const props = {
      link: {
        href: 'test'
      }
    };
    const wrapper = shallow(<ComponentCardWithButton {...props} />);
    expect(wrapper.find('Card').exists()).toEqual(true);
  });

  it('should render ComponentTextEyebrowTitleBodyButton component', () => {
    const props = {
      link: {
        href: 'test'
      }
    };
    const wrapper = shallow(<ComponentCardWithButton {...props} />);
    expect(wrapper.find('ComponentTextEyebrowTitleBodyButton').length).toBe(1);
  });

  it('should use default heading class', () => {
    const props = {
      link: {
        href: 'test'
      }
    };
    const wrapper = shallow(<ComponentCardWithButton {...props} />);
    expect(wrapper.find('ComponentTextEyebrowTitleBodyButton').prop('headingClass')).toBe('heading-1');
  });

  it('should use specified heading and body classes', () => {
    const props = {
      link: {
        href: 'test'
      },
      headingClass: 'heading-3',
      bodyClass: 'text--medium'
    };
    const wrapper = shallow(<ComponentCardWithButton {...props} />);
    expect(wrapper.find('ComponentTextEyebrowTitleBodyButton').prop('headingClass')).toBe('heading-3');
    expect(wrapper.find('ComponentTextEyebrowTitleBodyButton').prop('bodyClass')).toBe('text--medium');
  });
});
