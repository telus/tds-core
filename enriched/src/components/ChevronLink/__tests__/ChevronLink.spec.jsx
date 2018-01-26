import React from 'react';
import ChevronLink from '../../ChevronLink';

import { shallow } from 'enzyme';

describe('<ChevronLink/>', () => {
  it('sets the href to be the uri from the props', () => {
    const expectedUri = 'http://www.example/com/foo';

    const link = shallow(<ChevronLink uri={expectedUri} />);
    expect(link.prop('href')).toBe(expectedUri);
  });

  it('displays the expected title', () => {
    const expectedTitle = 'Foo';
    const link = shallow(<ChevronLink title={expectedTitle} />);

    expect(link.find('a').text()).toBe(expectedTitle);
  });

  it('defaults the target to self when it is not passed in', () => {
    const link = shallow(<ChevronLink />);
    expect(link.prop('target')).toBe('_self');
  });
});
