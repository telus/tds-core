import React from 'react';
import { shallow } from 'enzyme';
import Column from '../Column';

const deviceSizes = {
  xs: 'xs',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xl'
};

describe('<Column />', () => {
  it('correctly merges className', () => {
    const col = shallow(<Column xs={12} className="red" />);

    expect(col.hasClass('tds-xs-12')).toEqual(true);
    expect(col.hasClass('red')).toEqual(true);
  });

  it('correctly passes attributes to DOM node', () => {
    const col = shallow(<Column id="hello" title="my title" />);

    expect(col.prop('id')).toEqual('hello');
    expect(col.prop('title')).toEqual('my title');
  });

  it('correctly renders children', () => {
    const div = <div id="hello" />;
    const col = shallow(
      <Column>
        { div }
      </Column>
    );

    expect(col.contains(div)).toEqual(true);
  });

  it('renders column size classes', () => {
    const props = {};

    /* eslint-disable no-return-assign */
    Object.keys(deviceSizes).forEach(size => props[size] = 12);
    /* eslint-enable no-return-assign */

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-xs-12')).toEqual(true);
    expect(col.hasClass('tds-small-12')).toEqual(true);
    expect(col.hasClass('tds-medium-12')).toEqual(true);
    expect(col.hasClass('tds-large-12')).toEqual(true);
    expect(col.hasClass('tds-xl-12')).toEqual(true);
  });

  it('renders offset classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${size}Offset`] = 6); // eslint-disable-line no-return-assign

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-offset-xs-6')).toEqual(true);
    expect(col.hasClass('tds-offset-small-6')).toEqual(true);
    expect(col.hasClass('tds-offset-medium-6')).toEqual(true);
    expect(col.hasClass('tds-offset-large-6')).toEqual(true);
    expect(col.hasClass('tds-offset-xl-6')).toEqual(true);
  });

  it('renders push classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${size}Push`] = 2); // eslint-disable-line no-return-assign

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-push-xs-2')).toEqual(true);
    expect(col.hasClass('tds-push-small-2')).toEqual(true);
    expect(col.hasClass('tds-push-medium-2')).toEqual(true);
    expect(col.hasClass('tds-push-large-2')).toEqual(true);
    expect(col.hasClass('tds-push-xl-2')).toEqual(true);
  });

  it('renders pull classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${size}Pull`] = 5); // eslint-disable-line no-return-assign

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-pull-xs-5')).toEqual(true);
    expect(col.hasClass('tds-pull-small-5')).toEqual(true);
    expect(col.hasClass('tds-pull-medium-5')).toEqual(true);
    expect(col.hasClass('tds-pull-large-5')).toEqual(true);
    expect(col.hasClass('tds-pull-xl-5')).toEqual(true);
  });

  it('renders hidden classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${size}Hidden`] = true); // eslint-disable-line no-return-assign

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-hidden-xs')).toEqual(true);
    expect(col.hasClass('tds-hidden-small')).toEqual(true);
    expect(col.hasClass('tds-hidden-medium')).toEqual(true);
    expect(col.hasClass('tds-hidden-large')).toEqual(true);
    expect(col.hasClass('tds-hidden-xl')).toEqual(true);
  });

  it('renders hidden-up classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${size}HiddenUp`] = true); // eslint-disable-line no-return-assign

    const col = shallow(<Column {...props} />);

    expect(col.hasClass('tds-hidden-xs-up')).toEqual(true);
    expect(col.hasClass('tds-hidden-small-up')).toEqual(true);
    expect(col.hasClass('tds-hidden-medium-up')).toEqual(true);
    expect(col.hasClass('tds-hidden-large-up')).toEqual(true);
    expect(col.hasClass('tds-hidden-xl-up')).toEqual(true);
  });
});
