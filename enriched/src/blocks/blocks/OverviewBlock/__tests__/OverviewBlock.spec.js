import React from 'react';
import { shallow } from 'enzyme';
import OverviewBlock from '../';

describe('<OverviewBlock />', () => {
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
      listItems: []
    }
  };

  const overviewBlock = shallow( <OverviewBlock {...props}/> );

  it('sets the classes from the className prop', () => {
    expect(overviewBlock.hasClass('class')).toBeTruthy();
  });

  it('renders a textTitleBodyButton Component', () => {
    expect(overviewBlock.find('TextTitleBodyButton')).toBeDefined();
    expect(overviewBlock.find('TextTitleBodyButton').props().title).toBe('title');
    expect(overviewBlock.find('TextTitleBodyButton').props().description).toEqual('description');
  });

  it('renders a checklist Component', () => {
    expect(overviewBlock.find('CheckList')).toBeDefined();
    expect(overviewBlock.find('CheckList').props().listTitle).toBe('title');
    expect(overviewBlock.find('CheckList').props().listItems).toEqual([]);
  });
});
