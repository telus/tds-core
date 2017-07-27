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
  });

  it('can be inverted, outlined, or both', () => {
    let primaryButton = doShallow({ variant: 'primary', invert: true });
    expect(primaryButton).toHaveClassName('primaryInverted');

    primaryButton = doShallow({ variant: 'primary', outline: true });
    expect(primaryButton).toHaveClassName('primaryOutlined');

    primaryButton = doShallow({ variant: 'primary', invert: true, outline: true });
    expect(primaryButton).toHaveClassName('primaryInvertedOutlined');


    let secondaryButton = doShallow({ variant: 'secondary', invert: true });
    expect(secondaryButton).toHaveClassName('secondaryInverted');

    secondaryButton = doShallow({ variant: 'secondary', outline: true });
    expect(secondaryButton).toHaveClassName('secondaryOutlined');

    secondaryButton = doShallow({ variant: 'secondary', invert: true, outline: true });
    expect(secondaryButton).toHaveClassName('secondaryInvertedOutlined');
  });

  it('passes additional attributes to button element', () => {
    const button = doShallow({ id: 'the-button', tabindex: 1 });

    expect(button).toHaveProp('id', 'the-button');
    expect(button).toHaveProp('tabindex', 1);
  });
});
