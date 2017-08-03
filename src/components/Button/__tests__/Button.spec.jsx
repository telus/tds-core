import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';

describe('Button', () => {
  const doShallow = (overrides = {}) => shallow(<Button {...overrides}>Submit</Button>);

  it('renders', () => {
    const button = doShallow();

    expect(toJson(button)).toMatchSnapshot();
  });

  it('has one of the HTML button types', () => {
    let button = doShallow();
    expect(button).toHaveProp('type', 'button');

    button = doShallow({ type: 'reset' });
    expect(button).toHaveProp('type', 'reset');
  });

  it('can be presented as one of the allowed variants', () => {
    let button = doShallow();
    expect(button).toHaveClassName('primary');

    button = doShallow({ variant: 'primary' });
    expect(button).toHaveClassName('primary');

    button = doShallow({ variant: 'secondary' });
    expect(button).toHaveClassName('secondary');

    button = doShallow({ variant: 'outlined' });
    expect(button).toHaveClassName('outlined');
  });

  it('can be inverted', () => {
    const primaryButton = doShallow({ variant: 'primary', invert: true });
    expect(primaryButton).toHaveClassName('primaryInverted');

    const secondaryButton = doShallow({ variant: 'secondary', invert: true });
    expect(secondaryButton).toHaveClassName('secondaryInverted');

    const outlinedButton = doShallow({ variant: 'outlined', invert: true });
    expect(outlinedButton).toHaveClassName('outlinedInverted');
  });

  it('passes additional attributes to button element', () => {
    const button = doShallow({ id: 'the-button', tabindex: 1 });

    expect(button).toHaveProp('id', 'the-button');
    expect(button).toHaveProp('tabindex', 1);
  });
});
