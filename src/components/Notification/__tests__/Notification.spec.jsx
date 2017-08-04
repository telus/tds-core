import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { warn } from '../../../deprecate';
import Notification from '../../Notification/Notification';

jest.mock('../../../deprecate', () => (
  { warn: jest.fn() }
));

describe('<Notification />', () => {
  const doShallow = ({ ...overrides }) => (
    shallow(<Notification {...overrides}>Some content</Notification>)
  );

  it('renders', () => {
    const notification = doShallow();

    expect(toJson(notification)).toMatchSnapshot();
  });

  it('can have a variant', () => {
    let notification = doShallow({ variant: undefined });
    expect(notification).not.toHaveClassName('notification--');

    notification = doShallow({ variant: 'success' });
    expect(notification).toHaveClassName('notification notification--success');
  });

  it('adds icon for error variant', () => {
    // Todo: Use render when it becomes usable with jest
    // See https://github.com/blainekasten/enzyme-matchers/issues/25
    const notification = doShallow({ variant: 'error' });

    expect(notification.find('ErrorIcon')).toBePresent();
  });

  it('passes attributes to DOM node', () => {
    const notification = doShallow({ id: 'hello', title: 'my title' });

    expect(notification).toHaveProp('id', 'hello');
    expect(notification).toHaveProp('title', 'my title');
  });

  it('accepts but deprecates custom classes', () => {
    const notification = doShallow({ className: 'some-class' });

    expect(notification).toHaveClassName('some-class');
    expect(warn).toHaveBeenCalled();
  });

  it('accepts but deprecates inline styles', () => {
    const style = { color: 'blue' };
    const notification = doShallow({ style });

    expect(notification).toHaveProp('style', style);
    expect(warn).toHaveBeenCalled();
  });
});
