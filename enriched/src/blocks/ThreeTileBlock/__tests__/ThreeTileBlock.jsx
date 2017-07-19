import React from 'react';
import { shallow } from 'enzyme';
import ThreeTileBlock from '../ThreeTileBlock';

describe('ThreeTileBlock', () => {
  const content = {
    products: [
      {
        url: 'url',
        image: {
          file: {
            url: 'file url'
          },
          description: 'file description'
        },
        title: 'title',
        description: 'description'
      },
      {
        url: 'url',
        image: {
          file: {
            url: 'file url'
          },
          description: 'file description'
        },
        title: 'title',
        description: 'description'
      }
    ]
  };
  const buttonText = "Shop Now";

  const threeTileBlock = shallow(
    <ThreeTileBlock content={content} buttonText={buttonText} />);

  // it('should return a block for every product in the data', () => {
  //   expect(threeTileBlock.find('.three-tile-block__item').length).toEqual(2);
  // });

  it('should return a headline', () => {
    content.headline = 'headline';

    const newThreeTileBlock = shallow(
      <ThreeTileBlock content={content} buttonText={buttonText} />);

    expect(newThreeTileBlock.find('.three-tile-block__headline').length).toEqual(1);
  });
});
