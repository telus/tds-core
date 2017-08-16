import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { warn } from '../../../../warn';

import Link from '../../Link';

jest.mock('../../../../warn', () => (
  { warn: jest.fn() }
));

describe('Link.Button', () => {
  const doShallow = (overrides = {}) => shallow(
    <Link.Button {...overrides}>Go home</Link.Button>
  );
  const doShallowWithRouter = (overrides = {}) => shallow(
    <MemoryRouter>
      <Link.Button {...overrides}>Go home</Link.Button>
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

  it('can be presented as one of the allowed variants', () => {
    let link = doShallow();
    expect(link).toHaveClassName('primary');

    link = doShallow({ variant: 'primary' });
    expect(link).toHaveClassName('primary');

    link = doShallow({ variant: 'secondary' });
    expect(link).toHaveClassName('secondary');

    link = doShallow({ variant: 'outlined' });
    expect(link).toHaveClassName('outlined');
  });

  it('can be inverted for secondary and outlined variants', () => {
    const secondaryLink = doShallow({ variant: 'secondary', invert: true });
    expect(secondaryLink).toHaveClassName('secondaryInverted');

    const outlinedLink = doShallow({ variant: 'outlined', invert: true });
    expect(outlinedLink).toHaveClassName('outlinedInverted');
  });

  it('can not be inverted for primary variant', () => {
    const link = doShallow({ variant: 'primary', invert: true });

    expect(link).toHaveClassName('primary');
    expect(warn).toHaveBeenCalled();
  });

  it('can not be disabled', () => {
    const link = doShallow({ disabled: true });

    expect(link).not.toHaveProp('disabled');
    expect(warn).toHaveBeenCalled();
  });

  it('passes additional attributes to rendered <a> element', () => {
    const link = doShallow({ id: 'the-link', tabindex: 1 });

    expect(link).toHaveProp('id', 'the-link');
    expect(link).toHaveProp('tabindex', 1);
  });

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } });

    expect(link).not.toHaveProp('className', 'my-custom-class');
    expect(link).not.toHaveProp('style');
  });
})
