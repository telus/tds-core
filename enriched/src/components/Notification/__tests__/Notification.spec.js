import React from 'react';
import { shallow } from 'enzyme';
import Notification from '../../Notification';

describe('<Notification />', ()=> {
  it('correctly merges className', () => {
    const notification = shallow(<Notification className="red" variant="blue"/>);

    expect(notification.hasClass('notification')).toEqual(true);
    expect(notification.hasClass('red')).toEqual(true);
    expect(notification.hasClass('notification--blue')).toEqual(true);
  });

  it('correctly passes attributes to DOM node', () => {
    const notification = shallow(<Notification id="hello" title="my title"/>);

    expect(notification.prop('id')).toEqual('hello');
    expect(notification.prop('title')).toEqual('my title');
  });

  it('correctly renders children', () => {
    const div = <div id="hello"></div>;
    const notification = shallow(
      <Notification>
        { div }
      </Notification>
    );

    expect(notification.contains(div)).toEqual(true);
  });
});