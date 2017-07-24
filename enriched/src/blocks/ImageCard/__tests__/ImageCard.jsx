import React from 'react';
import { shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  const content = {
    id: '',
    contentAlign: 'Right',
    headline: '',
    bannerImage: {
      file: {
        url: ''
      },
      description: ''
    }
  };

  const imageCard = shallow(
    <ImageCard content={content}><p>This is a child of this component</p></ImageCard>
  );

  it('should render ImageCard (snapshot)', () => {
    expect(renderToJson(imageCard)).toMatchSnapshot();
  });

  it('should add right class when contentAlign equals Right', () => {
    expect(imageCard.find('.image-card--right').length).toEqual(1);
  });

  it('should add left class when contentAlign equals Left', () => {
    content.contentAlign = 'Left';

    const imageCardLeft = shallow(
      <ImageCard content={content}><p>This is a child of this component</p></ImageCard>
    );

    expect(imageCardLeft.find('.image-card--left').length).toEqual(1);
  });
});
