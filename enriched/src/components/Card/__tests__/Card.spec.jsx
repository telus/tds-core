import React from 'react';
import { shallow } from 'enzyme';
import Card from '../';


describe('<Card />', () => {
  it('contains .card class', () => {
    expect(shallow(
      <Card><p>This is a card component</p></Card>
    ).hasClass('card')).toBeTruthy();
  });

  it('contains the correct child', () => {
    expect(shallow(
      <Card><p>This is a card component</p></Card>
    ).find('p').render().text()).toEqual('This is a card component');
  });
});
