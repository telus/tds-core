import React from 'react';
import { shallow } from 'enzyme';
import ComponentTextEyebrowTitleBodyButton from '../';

describe('<ComponentTextEyebrowTitleBodyButton />', () => {
  describe('with optional props', () => {
    const props = {
      className: 'class',
      eyebrow: 'eyebrow',
      title: 'title',
      content: 'content',
      headingClass: 'heading-class'
    };

    const textEyebrowTitleBodyButton = shallow(<ComponentTextEyebrowTitleBodyButton {...props} />);

    it('sets the classes from the className prop', () => {
      expect(textEyebrowTitleBodyButton.hasClass('class')).toBeTruthy();
    });

    it('sets the classes from the headingClass prop on the heading', () => {
      expect(textEyebrowTitleBodyButton.find('.c-text-eyebrow-title-body-button__title').hasClass('heading-class')).toBeTruthy();
    });

    it('renders a paragraph with eyebrow content from the overviewEyebrow props', () => {
      expect(textEyebrowTitleBodyButton.find('p.heading-4')).toBeDefined();
      expect(textEyebrowTitleBodyButton.find('p.heading-4 WithLegal').props().content).toBe('eyebrow');
    });


    it('renders a header with legal content from the overviewTitle props', () => {
      expect(textEyebrowTitleBodyButton.find('.c-text-eyebrow-title-body-button__title')).toBeDefined();
      expect(textEyebrowTitleBodyButton.find('.c-text-eyebrow-title-body-button__title WithLegal').props().content).toBe('title');
    });

    it('renders a paragraph with legal content from the overviewDescription props', () => {
      expect(textEyebrowTitleBodyButton.find('.c-text-eyebrow-title-body-button__content')).toBeDefined();
      expect(textEyebrowTitleBodyButton.find('.c-text-eyebrow-title-body-button__content WithLegal').props().content).toBe('content');
    });
  });

  it('does render the title with the default class of display-heading-1 if no headingClass is passed in', () => {
    expect(shallow(<ComponentTextEyebrowTitleBodyButton />).find('.c-text-eyebrow-title-body-button__title').hasClass('display-heading-1')).toBe(true);
  });

  it('does not render the eyebrow when it is not passed down from props', () => {
    expect(shallow(<ComponentTextEyebrowTitleBodyButton />).find('.c-text-eyebrow-title-body-button__eyebrow').length).toEqual(0);
  });

  it('does not render a link when one is not passed down from props', () => {
    expect(shallow(<ComponentTextEyebrowTitleBodyButton />).find('a').length).toEqual(0);
    expect(shallow(<ComponentTextEyebrowTitleBodyButton />).find('ChevronLink').length).toEqual(0);
  });

  it('renders an anchor link if there is no chevron prop passed in', () => {
    const props = {
      link: {
        target: 'target',
        href: 'href',
        text: 'text'
      }
    };

    const textEyebrowTitleBodyButton = shallow(<ComponentTextEyebrowTitleBodyButton {...props} />);

    expect(textEyebrowTitleBodyButton.find('a')).toBeDefined();
    expect(textEyebrowTitleBodyButton.find('a').props().href).toBe('href');
    expect(textEyebrowTitleBodyButton.find('a').props().target).toBe('target');
  });


  it('renders a chevron link with content from the header props if chevron is set to true', () => {
    const props = {
      link: {
        target: 'target',
        href: 'href',
        text: 'text'
      }
    };

    const textEyebrowTitleBodyButton = shallow(<ComponentTextEyebrowTitleBodyButton chevron {...props} />);
    expect(textEyebrowTitleBodyButton.find('ChevronLink')).toBeDefined();
    expect(textEyebrowTitleBodyButton.find('ChevronLink').props().target).toEqual('target');
    expect(textEyebrowTitleBodyButton.find('ChevronLink').props().uri).toEqual('href');
    expect(textEyebrowTitleBodyButton.find('ChevronLink').props().title).toEqual('text');
  });

});
