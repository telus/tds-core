import React from 'react';
import { mount } from 'enzyme';
import OverviewBlock from '../';

describe('<OverviewBlock />', () => {
  it('does not render a header if header is not passed in via props', () => {
    const checkListComponent = mount( <OverviewBlock/> );
    expect(checkListComponent.find('h4').length).toBe(0);
  });

  it('renders a header with content from the header props', () => {
    const header = 'header';
    const checkListComponent = mount( <OverviewBlock header={header}/> );
    expect(checkListComponent.find('h4')).toBeDefined();
    expect(checkListComponent.find('h4').text()).toBe(header);
  });
});
