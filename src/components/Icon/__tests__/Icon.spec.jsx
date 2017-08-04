import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Icon from '../Icon';

describe('<Icon />', () => {
  const defaultProps = {
    glyph: 'checkmark'
  };
  const doShallow = (overrides = {}) => shallow(<Icon {...defaultProps} {...overrides} />);

  it('renders', () => {
    const icon = doShallow();

    expect(toJson(icon)).toMatchSnapshot();
  });

  it('needs a glyph', () => {
    const icon = doShallow({ glyph: 'spyglass' });

    expect(icon).toHaveClassName('icon-core-spyglass');
  });

  it('supports variants', () => {
    const icon = doShallow({ variant: 'secondary' });

    expect(icon).toHaveClassName('icon--secondary');
  });

  it('can be fixed width', () => {
    const icon = doShallow({ fixedWidth: true });

    expect(icon).toHaveClassName('icon--fw');
  });

  it('supports custom CSS classes', () => {
    const icon = doShallow({ className: 'custom-class' });

    expect(icon).toHaveClassName('custom-class');
  });

  it('passes additional attributes to the icon element', () => {
    const button = doShallow({ id: 'the-icon', role: 'button' });

    expect(button).toHaveProp('id', 'the-icon');
    expect(button).toHaveProp('role', 'button');
  });
});
