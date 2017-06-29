import React from 'react';
import { shallow } from 'enzyme';
import ComponentChecklist from '../';

describe('<ComponentChecklist />', () => {
  let props;
  const listTitle = 'header';
  const listItems = ['one', 'two', 'three'];

  beforeEach(() => {
    props = {
      listTitle,
      listItems
    };
  });

  it('sets the classes from the className prop', () => {
    const checkListComponent = shallow(<ComponentChecklist className="foo bar" {...props} />);
    expect(checkListComponent.hasClass('foo')).toBeTruthy();
    expect(checkListComponent.hasClass('bar')).toBeTruthy();
  });

  it('does not render a header if header is not passed in via props', () => {
    const checkListComponent = shallow(<ComponentChecklist listTitle="" listItems={listItems} />);
    expect(checkListComponent.find('h4').length).toBe(0);
  });

  it('renders a header with content from the header props', () => {
    const checkListComponent = shallow(<ComponentChecklist {...props} />);
    expect(checkListComponent.find('h4')).toBeDefined();
    expect(checkListComponent.find('h4 WithLegal').props().content).toBe(listTitle);
  });

  it('renders a list of items from the list props', () => {
    const checkListComponent = shallow(<ComponentChecklist {...props} />);
    expect(checkListComponent.find('ul')).toBeDefined();
    expect(checkListComponent.find('li').length).toBe(3);
  });
});
