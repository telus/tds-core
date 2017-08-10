import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MemoryRouter } from 'react-router-dom';

import Link from '../Link';

describe('Link', () => {
  const doShallow = (overrides = {}) => shallow(
    <Link {...overrides}>Go home</Link>
  );
  const doShallowWithRouter = (overrides = {}) => shallow(
    <MemoryRouter>
      <Link {...overrides}>Go home</Link>
    </MemoryRouter>
  );

  it('renders', () => {
    const link = doShallow();

    expect(toJson(link)).toMatchSnapshot();
  });

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' });

    expect(link).toHaveTagName('a');
    expect(link).toHaveProp('href', 'http://telus.com');
  });

  it('is a React Router Link when using the to attribute', () => {
    const link = doShallowWithRouter({ to: '/about' });

    expect(link.find('Router').dive()).toMatchSelector('Link');
    expect(link.find('Router').dive()).toHaveProp('to', '/about');
  });

  it('can be inverted', () => {
    let link = doShallow({ invert: true });
    expect(link).toHaveClassName('inverted');

    link = doShallow({ invert: false });
    expect(link).not.toHaveClassName('inverted');
  });

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-button', tabindex: 1 });

    expect(link).toHaveProp('id', 'the-button');
    expect(link).toHaveProp('tabindex', 1);
  });

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } });

    expect(link).not.toHaveProp('className', 'my-custom-class');
    expect(link).not.toHaveProp('style');
  });
});
