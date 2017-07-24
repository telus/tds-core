import React from 'react';
import { shallow } from 'enzyme';
import ImageFullCard from '../ImageFullCard';


describe('Product Full Width Image', () => {
  const content = {
    id: 'id',
    description: 'description',
    headline: 'headline',
    legalText: 'legal',
    image: {
      file: {
        url: 'file url'
      }
    }
  };

  const imageFullCard = shallow(<ImageFullCard content={content} />);

  it('should render headline', () => {
    expect(imageFullCard.find('.image-full-card__headline').length).toEqual(1);
  });

  it('should render legal text', () => {
    expect(imageFullCard.find('.image-full-card__content').html()).toContain(content.legalText);
  });

  it('should add flag to align content right if data calls for it', () => {
    content.contentAlign = 'Right';

    const newImageFullCard = shallow(<ImageFullCard content={content} />);

    expect(newImageFullCard.find('.image-full-card--right').length).toEqual(1);
  });
});
