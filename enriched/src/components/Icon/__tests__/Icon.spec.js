import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../index';

describe('<Icon />', () => {
  it('renders correct icon classes', () => {
    const wrapper = shallow(<Icon glyph="spyglass" />);

    expect(wrapper.hasClass('icon')).toEqual(true);
    expect(wrapper.hasClass('icon-core-spyglass')).toEqual(true);
  });

  it('renders correct variant class', () => {
    const wrapper = shallow(<Icon glyph="spyglass" variant="secondary" />);

    expect(wrapper.hasClass('icon--secondary')).toEqual(true);
  });

  it('renders fixed width class', () => {
    const wrapper = shallow(<Icon glyph="spyglass" fixedWidth />);

    expect(wrapper.hasClass('icon--fw')).toEqual(true);
  });

  it('correctly merges className with generated classes', () => {
    const wrapper = shallow(<Icon glyph="spyglass" className="red" />);

    expect(wrapper.hasClass('icon')).toEqual(true);
    expect(wrapper.hasClass('icon-core-spyglass')).toEqual(true);
    expect(wrapper.hasClass('red')).toEqual(true);
  });

  it('correctly consumes props', () => {
    // These are the props that should be consumed, but not passed to the
    // icon node inside the component. Every other prop should show up
    // on the node.
    const consumableProps = ['glyph', 'variant', 'fixedWidth'];
    const title = 'a title';
    const wrapper = shallow(<Icon glyph="spyglass" title={ title } />);
    const componentProps = wrapper.props();
    const leftoverProps = consumableProps.filter(p => componentProps[p]);

    expect(leftoverProps.length).toEqual(0);
    expect(wrapper.prop('title')).toEqual(title);
  });
});
