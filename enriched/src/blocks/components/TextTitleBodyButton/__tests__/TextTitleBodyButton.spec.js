import React from 'react';
import { mount } from 'enzyme';
import TextTitleBodyButton from '../';

describe('<TextTitleBodyButton />', () => {
  const props = {
    className: 'class',
    title: 'title',
    description: 'description',
    ctaLink: {
      target: 'target',
      href: 'href',
      text: 'text'
    }
  };

  const textTitleBodyButton = mount( <TextTitleBodyButton {...props}/> );

  it('sets the classes from the className prop', () => {
    expect(textTitleBodyButton.hasClass('class')).toBeTruthy();
  });

  it('renders a header with content from the overviewTitle props', () => {
    expect(textTitleBodyButton.find('h4')).toBeDefined();
    expect(textTitleBodyButton.find('h4').text()).toBe('title');
  });

  it('renders a paragraph with content from the overviewDescription props', () => {
    expect(textTitleBodyButton.find('p')).toBeDefined();
    expect(textTitleBodyButton.find('p').text()).toBe('description');
  });

  it('renders a link with content from the header props', () => {
    expect(textTitleBodyButton.find('a')).toBeDefined();
    expect(textTitleBodyButton.find('a').props().href).toBe('href');
    expect(textTitleBodyButton.find('a').props().target).toBe('target');
  });

});
