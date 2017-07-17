import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../Overview';

describe('<Overview />', () => {
  const props = {
    className: 'class',
    overviewTitle: 'title',
    overviewDescription: 'description',
    ctaLink: {
      target: 'target',
      href: 'href',
      text: 'text'
    },
    sideContent: {
      listTitle: 'title',
      listItems: ['one', 'two']
    }
  };

  const overview = shallow(<Overview {...props} />);

  it('sets the classes from the className prop', () => {
    expect(overview.hasClass('class')).toBeTruthy();
  });

  it('renders a textTitleBodyButton Component', () => {
    expect(overview.find('TextTitleBodyButton')).toBeDefined();
    expect(overview.find('TextTitleBodyButton').props().caption).toBe('title');
    expect(overview.find('TextTitleBodyButton').props().description).toEqual('description');
  });

  it('renders a checklist Component', () => {
    expect(overview.find('CheckList')).toBeDefined();
    expect(overview.find('CheckList').props().listTitle).toBe('title');
    expect(overview.find('CheckList').props().listItems).toEqual(['one', 'two']);
  });
});
