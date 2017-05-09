import React from 'react';
import { shallow } from 'enzyme';
import BlockImageCentredQuote from '../';

describe('Quote Banner Block Component', () => {
  let wrapper;

  describe('props are not present', () => {
    beforeEach(() => {
      const props = {};
      wrapper = shallow(<BlockImageCentredQuote {...props} />);
    });

    it('should not render banner image', () => {
      expect(wrapper.find('img').length).toEqual(0);
    });

    it('should not render client logo image', () => {
      const quoteCard = wrapper.find('ComponentQuoteCard');
      expect(quoteCard.props().clientLogo).toEqual({ url: '', title: '' });
    });
  });

  describe('props are present', () => {
    beforeEach(() => {
      const props = {
        quote: 'Some quote',
        author: 'Author',
        clientName: 'Client Name',
        clientLogo: { file: { url: 'some/path' }, title: 'description' },
        bannerImage: { file: { url: 'picture.png' }, title: 'description' }
      };
      wrapper = shallow(<BlockImageCentredQuote {...props} />);
    });

    it('should render child component with props passed down', () => {
      const quoteCard = wrapper.find('ComponentQuoteCard');
      expect(quoteCard.props().quote).toEqual('Some quote');
      expect(quoteCard.props().author).toEqual('Author');
      expect(quoteCard.props().clientName).toEqual('Client Name');
      expect(quoteCard.props().clientLogo).toEqual({ url: 'some/path', title: 'description' });
    });

    it('should set the banner image as background image', () => {
      const imgProps = wrapper.find('img').props();
      expect(imgProps.src).toEqual('picture.png');
      expect(imgProps.alt).toEqual('description');
    });
  });
});
