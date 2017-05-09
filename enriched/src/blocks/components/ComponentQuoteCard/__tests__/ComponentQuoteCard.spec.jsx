import React from 'react';
import { shallow } from 'enzyme';
import ComponentQuoteCard from '../';

describe('QuoteCard Component', () => {
  let quoteCard;

  describe('props are not present', () => {
    beforeEach(() => {
      const props = {};
      quoteCard = shallow(<ComponentQuoteCard {...props} />);
    });

    it('should set default quote to empty string', () => {
      expect(quoteCard.find('.c-quote-card__quote-text').text()).toEqual('“”');
    });

    it('should set default author to empty string', () => {
      expect(quoteCard.find('.c-quote-card__author').text()).toContain('');
    });

    it('should not render client logo image', () => {
      expect(quoteCard.find('img').length).toEqual(0);
    });
  });

  describe('props are present', () => {
    beforeEach(() => {
      const props = {
        author: 'Author name',
        quote: 'My quote',
        clientName: 'Some company',
        clientLogo: { url: 'some/url', title: 'Client logo title' }
      };
      quoteCard = shallow(<ComponentQuoteCard {...props} />);
    });

    it('renders a quote', () => {
      expect(quoteCard.find('.c-quote-card__quote-text').text()).toEqual('“My quote”');
    });

    it('renders an author title', () => {
      expect(quoteCard.find('.c-quote-card__author').text()).toContain('Author name');
    });

    it('renders an author client name', () => {
      expect(quoteCard.find('.c-quote-card__author').text()).toContain('Some company');
    });

    it('renders an author client name', () => {
      const imgProps = quoteCard.find('img').props();
      expect(imgProps.src).toEqual('some/url');
      expect(imgProps.alt).toEqual('Client logo title');
    });
  });
});
