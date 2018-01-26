import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BlockOverview from '../';


describe('<BlockOverview />', () => {
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

  const overviewBlock = shallow(<BlockOverview {...props} />);

  it('matches snapshot', () => {
    expect(shallowToJson(overviewBlock)).toMatchSnapshot();
  });

  it('sets the classes from the className prop', () => {
    expect(overviewBlock.hasClass('class')).toBeTruthy();
  });

  it('renders a textEyebrowTitleBodyButton Component', () => {
    expect(overviewBlock.find('ComponentTextEyebrowTitleBodyButton')).toBeDefined();
    expect(overviewBlock.find('ComponentTextEyebrowTitleBodyButton').props().title).toBe('title');
    expect(overviewBlock.find('ComponentTextEyebrowTitleBodyButton').props().content).toEqual('description');
  });

  it('renders a checklist Component', () => {
    expect(overviewBlock.find('ComponentChecklist')).toBeDefined();
    expect(overviewBlock.find('ComponentChecklist').props().listTitle).toBe('title');
    expect(overviewBlock.find('ComponentChecklist').props().listItems).toEqual(['one', 'two']);
  });
});
