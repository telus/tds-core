import React from 'react';
import { shallow } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';

import Link from '../../Link';
import Icon from '../../../Icon/Icon';

describe('Link.Chevron', () => {
  const doShallow = (overrides = {}) => shallow(
    <Link.Chevron {...overrides}>Go home</Link.Chevron>
  );
  const doShallowWithRouter = (overrides = {}) => shallow(
    <MemoryRouter>
      <Link.Chevron {...overrides}>Go home</Link.Chevron>
    </MemoryRouter>
  );

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' });

    expect(link).toHaveTagName('a');
    expect(link).toHaveProp('href', 'http://telus.com');
  });

  it('is a React Router Link when using the to attribute', () => {
    const link = doShallowWithRouter({ to: '/about' });

    const reactRouterLink = link.find('Router').dive().dive();
    expect(reactRouterLink).toMatchSelector('Link');
    expect(reactRouterLink).toHaveProp('to', '/about');
  });

  it('has a chevron icon', () => {
    const link = doShallow({ href: 'https://telus.com' });

    expect(link).toContainReact(<Icon glyph="chevron" aria-hidden="true" />);
  });

  it('can have specific variants', () => {
    let link = doShallow({ href: 'https://telus.com' });
    expect(link).toHaveClassName('primary');

    link = doShallow({ href: 'https://telus.com', variant: 'secondary' });
    expect(link).toHaveClassName('secondary');

    link = doShallow({ href: 'https://telus.com', variant: 'primary' });
    expect(link).toHaveClassName('primary');

    link = doShallow({ href: 'https://telus.com', variant: 'inverted' });
    expect(link).toHaveClassName('inverted');
  });

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-link', role: 'button' });

    expect(link).toHaveProp('id', 'the-link');
    expect(link).toHaveProp('role', 'button');
  });

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } });

    expect(link).not.toHaveProp('className', 'my-custom-class');
    expect(link).not.toHaveProp('style');
  });
});
