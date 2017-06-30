import React from 'react';
import { shallow } from 'enzyme';
import ImageText5050 from '../index';


describe('ImageText5050', () => {
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

  const imageText5050 = shallow(<ImageText5050 content={content} />);

  it('should render headline', () => {
    expect(imageText5050.find('.image_text_50-50__headline').length).toEqual(1);
  });

  it('should render legal text', () => {
    expect(imageText5050.find('.image_text_50-50__copy').html()).toContain(content.legalText);
  });

  it('should add flag to align content right if data calls for it', () => {
    content.imageAlign = "Right";

    const newImageText5050 = shallow(<ImageText5050 content={content} />);

    expect(newImageText5050.find('.align-right').length).toEqual(1);
  });
});
