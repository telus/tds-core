import React from 'react';
import { shallow } from 'enzyme';
import Column from '../Column';

const deviceSizes = {
  xs: 'xs',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xl',
};

describe('<Column />', () => {
  it('correctly merges className', () => {
    const col = shallow(<Column xs={ 12 } className="red" />);

    expect(col.hasClass('xs-12')).toEqual(true);
    expect(col.hasClass('red')).toEqual(true);
  });

  it('correctly passes attributes to DOM node', () => {
    const col = shallow(<Column id="hello" title="my title" />);

    expect(col.prop('id')).toEqual('hello');
    expect(col.prop('title')).toEqual('my title');
  });

  it('correctly renders children', () => {
    const div = <div id="hello"></div>;
    const col = shallow(
      <Column>
        { div }
      </Column>
    );

    expect(col.contains(div)).toEqual(true);
  });

  it('renders column size classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[size] = 12);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('xs-12')).toEqual(true);
    expect(col.hasClass('small-12')).toEqual(true);
    expect(col.hasClass('medium-12')).toEqual(true);
    expect(col.hasClass('large-12')).toEqual(true);
    expect(col.hasClass('xl-12')).toEqual(true);
  });

  it('renders offset classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${ size }Offset`] = 6);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('offset-xs-6')).toEqual(true);
    expect(col.hasClass('offset-small-6')).toEqual(true);
    expect(col.hasClass('offset-medium-6')).toEqual(true);
    expect(col.hasClass('offset-large-6')).toEqual(true);
    expect(col.hasClass('offset-xl-6')).toEqual(true);
  });

  it('renders push classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${ size }Push`] = 2);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('push-xs-2')).toEqual(true);
    expect(col.hasClass('push-small-2')).toEqual(true);
    expect(col.hasClass('push-medium-2')).toEqual(true);
    expect(col.hasClass('push-large-2')).toEqual(true);
    expect(col.hasClass('push-xl-2')).toEqual(true);
  });

  it('renders pull classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${ size }Pull`] = 5);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('pull-xs-5')).toEqual(true);
    expect(col.hasClass('pull-small-5')).toEqual(true);
    expect(col.hasClass('pull-medium-5')).toEqual(true);
    expect(col.hasClass('pull-large-5')).toEqual(true);
    expect(col.hasClass('pull-xl-5')).toEqual(true);
  });

  it('renders hidden classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${ size }Hidden`] = true);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('hidden-xs')).toEqual(true);
    expect(col.hasClass('hidden-small')).toEqual(true);
    expect(col.hasClass('hidden-medium')).toEqual(true);
    expect(col.hasClass('hidden-large')).toEqual(true);
    expect(col.hasClass('hidden-xl')).toEqual(true);
  });

  it('renders hidden-up classes', () => {
    const props = {};
    Object.keys(deviceSizes).forEach(size => props[`${ size }HiddenUp`] = true);

    const col = shallow(<Column { ...props } />);

    expect(col.hasClass('hidden-xs-up')).toEqual(true);
    expect(col.hasClass('hidden-small-up')).toEqual(true);
    expect(col.hasClass('hidden-medium-up')).toEqual(true);
    expect(col.hasClass('hidden-large-up')).toEqual(true);
    expect(col.hasClass('hidden-xl-up')).toEqual(true);
  });
});
