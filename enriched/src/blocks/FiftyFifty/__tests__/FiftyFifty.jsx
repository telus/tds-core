import React from 'react';
import { shallow } from 'enzyme';
import FiftyFifty from '../index';


describe('FiftyFifty', () => {
  const content = {
    id: 'id',
    description: 'description',
    headline: 'headline',
    legalText: 'legal text',
    image: {
      file: {
        url: 'file url'
      },
      description: 'file description'
    }
  };

  const fiftyFifty = shallow(<FiftyFifty content={content} />);

  it('should render headline', () => {
    expect(fiftyFifty.find('.fiftyfifty__headline').length).toEqual(1);
  });

  it('should render legal text', () => {
    expect(fiftyFifty.find('.fiftyfifty__copy').html()).toContain(content.legalText);
  });

  it('should add flag to align content right if data calls for it', () => {
    content.imageAlign = "Right";

    const newFiftyFifty = shallow(<FiftyFifty content={content} />);

    expect(newFiftyFifty.find('.align-right').length).toEqual(1);
  });
});
