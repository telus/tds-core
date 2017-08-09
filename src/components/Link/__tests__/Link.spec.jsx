import React from 'react';
import { shallow, mount } from 'enzyme';

import { Link as ReactRouterLink, MemoryRouter } from 'react-router-dom';

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
});
