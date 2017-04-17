import React from 'react';
import { mount } from 'enzyme';
import CheckList from '../';

describe('<CheckList />', () => {
  it('sets the classes from the className prop', () => {
    const checkListComponent = mount( <CheckList className="foo bar"/> );
    expect(checkListComponent.hasClass('foo')).toBeTruthy();
    expect(checkListComponent.hasClass('bar')).toBeTruthy();
  });

  it('does not render a header if header is not passed in via props', () => {
    const checkListComponent = mount( <CheckList/> );
    expect(checkListComponent.find('h4').length).toBe(0);
  });

  it('renders a header with content from the header props', () => {
    const listTitle = 'header';
    const checkListComponent = mount( <CheckList listTitle={listTitle}/> );
    expect(checkListComponent.find('h4')).toBeDefined();
    expect(checkListComponent.find('h4').text()).toBe(listTitle);
  });

  it('renders a list of items from the list props', () => {
    const listItems = ['one', 'two', 'three'];
    const checkListComponent = mount( <CheckList listItems={listItems}/> );
    expect(checkListComponent.find('ul')).toBeDefined();
    expect(checkListComponent.find('li').length).toBe(3);
  });
});
